import { ReactNode, useEffect, useRef, useState } from "react";

export type DropdownItem = {
  type: "item" | "divider";
  label?: ReactNode;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
};

export type DropdownProps = {
  trigger: ReactNode;
  items: DropdownItem[];
  isRight?: boolean;
  isUp?: boolean;
  isHoverable?: boolean;
  className?: string;
};

export const Dropdown = ({
  trigger,
  items,
  isRight = false,
  isUp = false,
  isHoverable = false,
  className = "",
}: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsActive(!isActive);

  const dropdownClasses = [
    "dropdown",
    isActive ? "is-active" : "",
    isRight ? "is-right" : "",
    isUp ? "is-up" : "",
    isHoverable ? "is-hoverable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={dropdownClasses} ref={dropdownRef}>
      <div className="dropdown-trigger" onClick={toggleDropdown}>
        {trigger}
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {items.map((item, index) => {
            if (item.type === "divider") {
              return <hr key={index} className="dropdown-divider" />;
            }

            const commonProps = {
              className: `dropdown-item ${item.isActive ? "is-active" : ""}`,
              onClick: (e: React.MouseEvent) => {
                if (!item.href) e.preventDefault();
                item.onClick?.();
                if (!isHoverable) setIsActive(false);
              },
            };

            return item.href ? (
              <a href={item.href} {...commonProps} key={index}>
                {item.label}
              </a>
            ) : (
              <div {...commonProps} key={index}>
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
