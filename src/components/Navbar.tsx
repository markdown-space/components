import { ComponentProps, memo, ReactNode, useState } from "react";

export interface NavbarProps extends ComponentProps<"nav"> {
  brand?: ReactNode;
  color?:
    | "primary"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "black"
    | "dark"
    | "light"
    | "white";
  hideToggle?: boolean;
  startItems?: ReactNode;
  endItems?: ReactNode;
  isSpaced?: boolean;
  hasShadow?: boolean;
  isFixedTop?: boolean;
}

export const Navbar = memo(function ({
  className,
  brand,
  color,
  hideToggle = false,
  startItems,
  endItems,
  isSpaced,
  hasShadow,
  isFixedTop,
  ...props
}: NavbarProps) {
  const baseClass = "navbar";
  const colorClass = color ? `is-${color}` : "";
  const spacedClass = isSpaced ? "is-spaced" : "";
  const shadowClass = hasShadow ? "has-shadow" : "";
  const fixedTopClass = isFixedTop ? "is-fixed-top" : "";

  const classes = [
    baseClass,
    colorClass,
    spacedClass,
    shadowClass,
    fixedTopClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav
      className={classes}
      role="navigation"
      aria-label="main navigation"
      {...props}
    >
      <div className="navbar-brand">
        {brand}
        {!hideToggle && (
          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        )}
      </div>
      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        {startItems && <div className="navbar-start">{startItems}</div>}
        {endItems && (
          <div className="navbar-end">
            <div className="navbar-item">{endItems}</div>
          </div>
        )}
      </div>
    </nav>
  );
});

export interface NavbarItemProps extends ComponentProps<"a"> {
  isSelected?: boolean;
  href: string;
  children: ReactNode;
}

export const NavbarItem = ({
  isSelected,
  href,
  className,
  children,
  ...props
}: NavbarItemProps) => {
  const baseClass = "navbar-item";
  const activeClass = isSelected ? "is-active" : "";
  const classes = [baseClass, activeClass, className].filter(Boolean).join(" ");

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
};

type NavbarDropdownProps = {
  label: ReactNode;
  href?: string;
  items: ReactNode;
  isRight?: boolean;
  isArrowLess?: boolean;
};

export const NavbarDropdown = ({
  label,
  items,
  isRight,
  isArrowLess,
}: NavbarDropdownProps) => {
  const baseClasses = "navbar-item has-dropdown is-hoverable";
  const arrowLessClass = isArrowLess ? "is-arrowless" : "";

  const classes = [baseClasses, arrowLessClass].filter(Boolean).join(" ");

  const itemsBaseClass = "navbar-dropdown";
  const rightClass = isRight ? "is-right" : "";

  const itemsClasses = [itemsBaseClass, rightClass].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div className="navbar-link">{label}</div>
      <div className={itemsClasses}>{items}</div>
    </div>
  );
};
