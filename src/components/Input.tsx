import { ComponentProps, CSSProperties } from "react";
import { Color, Size } from "../types/shared";

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  type: "text" | "password" | "email" | "tel";
  placeholder?: string;
  style?: CSSProperties;
  color?: Color;
  size?: Size;
  isRounded?: boolean;
  isStatic?: boolean;
}

export const Input = ({
  type,
  placeholder,
  style,
  color,
  size,
  isRounded,
  isStatic,
  ...props
}: InputProps) => {
  const baseClass = "input";
  const colorClass = color ? `is-${color}` : "";
  const sizeClass = size ? `is-${size}` : "";
  const roundedClass = isRounded ? "is-rounded" : "";
  const staticClass = isStatic ? "is-static" : "";

  const classes = [baseClass, colorClass, sizeClass, roundedClass, staticClass]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      className={classes}
      type={type}
      placeholder={placeholder}
      style={style}
      {...props}
    />
  );
};
