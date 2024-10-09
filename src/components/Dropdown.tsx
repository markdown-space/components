import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type DropdownProps = {
  trigger: ReactNode;
  isRight?: boolean;
  isUp?: boolean;
  isHoverable?: boolean;
  className?: string;
  children: ReactNode;
};

export const Dropdown = ({
  trigger,
  isRight = false,
  isUp = false,
  isHoverable = false,
  className = "",
  children,
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
      <div className="dropdown-menu" role="menu" style={{ zIndex: 40 }}>
        <ul className="dropdown-content">{children}</ul>
      </div>
    </div>
  );
};

export type DropdownItemProps = {
  onClick?: () => void;
  isActive?: boolean;
  children: ReactNode;
};

export const DropdownItem = ({
  onClick,
  isActive,
  children,
}: DropdownItemProps) => {
  const commonProps = {
    className: `dropdown-item ${isActive ? "is-active" : ""}`,
    ...(onClick && { onClick }),
    isActive,
  };

  return <StyledDropdownItem {...commonProps}>{children}</StyledDropdownItem>;
};

const StyledDropdownItem = styled.li<{ isActive?: boolean }>`
  cursor: pointer;

  &:hover {
    background-color: var(--bulma-scheme-main);
    filter: brightness(95%);
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: var(--bulma-scheme-main);
    filter: brightness(95%);
    `}
`;

export const DropdownDivider = () => <hr className="dropdown-divider" />;
