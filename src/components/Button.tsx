import { ButtonHTMLAttributes } from "react";
import { Color, Size } from "../types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
  isOutlined?: boolean;
  isInverted?: boolean;
  isRounded?: boolean;
  isLoading?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  color,
  size,
  isOutlined = false,
  isInverted = false,
  isRounded = false,
  isLoading = false,
  isActive = false,
  isFocused = false,
  isHovered = false,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses = "button";
  const colorClasses = color ? `is-${color}` : "";
  const sizeClasses = size ? `is-${size}` : "";
  const outlinedClass = isOutlined ? "is-outlined" : "";
  const invertedClass = isInverted ? "is-inverted" : "";
  const roundedClass = isRounded ? "is-rounded" : "";
  const loadingClass = isLoading ? "is-loading" : "";
  const activeClass = isActive ? "is-active" : "";
  const focusedClass = isFocused ? "is-focused" : "";
  const hoveredClass = isHovered ? "is-hovered" : "";
  const fullWidthClass = fullWidth ? "is-fullwidth" : "";

  const buttonClasses = [
    baseClasses,
    colorClasses,
    sizeClasses,
    outlinedClass,
    invertedClass,
    roundedClass,
    loadingClass,
    activeClass,
    focusedClass,
    hoveredClass,
    fullWidthClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
