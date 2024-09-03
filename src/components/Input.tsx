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
  isSkeleton?: boolean;
}

export const Input = ({
  type,
  placeholder,
  style,
  color,
  size,
  isRounded,
  isStatic,
  isSkeleton,
  ...props
}: InputProps) => {
  const baseClass = "input";
  const colorClass = color ? `is-${color}` : "";
  const sizeClass = size ? `is-${size}` : "";
  const roundedClass = isRounded ? "is-rounded" : "";
  const staticClass = isStatic ? "is-static" : "";
  const skeletonClass = isSkeleton ? "is-skeleton" : "";

  const classes = [
    baseClass,
    colorClass,
    sizeClass,
    roundedClass,
    staticClass,
    skeletonClass,
  ]
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
