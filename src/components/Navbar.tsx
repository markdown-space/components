import { ReactNode, useState } from "react";
import { Color } from "../types/shared";
import { Button } from "./Button";

export type NavbarItemProps = {
  label: string;
  href?: string;
  isSelected?: boolean;
};

export type NavbarDropdownProps = {
  label: string;
  items: NavbarItemProps[];
};

export type EndButtonProps = {
  label: string;
  color?: Color;
};

export type NavbarProps = {
  brand?: ReactNode;
  color?: Color;
  hideToggle?: boolean;
  startItems?: (NavbarItemProps | NavbarDropdownProps)[];
  endButtons?: EndButtonProps[];
};

export const Navbar = ({
  brand,
  color,
  hideToggle = false,
  startItems,
  endButtons,
}: NavbarProps) => {
  const baseClass = "navbar";
  const colorClass = color ? `is-${color}` : "";

  const classes = [baseClass, colorClass].filter(Boolean).join(" ");

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const renderNavbarItem = (item: NavbarItemProps | NavbarDropdownProps) => {
    if ("items" in item) {
      return (
        <div key={item.label} className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">{item.label}</a>
          <div className="navbar-dropdown">
            {item.items.map((subItem) => (
              <a
                key={subItem.label}
                className={`navbar-item ${subItem.isSelected ? "is-active" : ""}`}
                href={subItem.href}
              >
                {subItem.label}
              </a>
            ))}
          </div>
        </div>
      );
    }

    return (
      <a key={item.label} className="navbar-item" href={item.href}>
        {item.label}
      </a>
    );
  };

  return (
    <nav className={classes} role="navigation" aria-label="main navigation">
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
        {startItems?.length && (
          <div className="navbar-start">
            {startItems?.map(renderNavbarItem)}
          </div>
        )}
        {endButtons?.length && (
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {endButtons?.map((button) => (
                  <Button key={button.label} color={button.color || "primary"}>
                    {button.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
