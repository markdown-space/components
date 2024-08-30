import { ComponentProps, CSSProperties } from "react";
import { Size } from "../types/shared";

export interface SelectProps extends Omit<ComponentProps<"select">, "size"> {
  style?: CSSProperties;
  color?: "link" | "primary" | "info" | "success" | "warning" | "danger";
  size?: Size;
  rounded?: boolean;
  multiple?: boolean;
  loading?: boolean;
  state?: "hovered" | "focused" | "active";
}

export const Select = ({
  style,
  color,
  size,
  rounded,
  multiple,
  loading,
  state,
  ...props
}: SelectProps) => {
  const baseClass = "select";
  const colorClass = color ? `is-${color}` : "";
  const sizeClass = size ? `is-${size}` : "";
  const roundedClass = rounded ? "is-rounded" : "";
  const multipleClass = multiple ? "is-multiple" : "";
  const loadingClass = loading ? "is-loading" : "";

  const rootClasses = [
    baseClass,
    colorClass,
    sizeClass,
    roundedClass,
    multipleClass,
    loadingClass,
  ]
    .filter(Boolean)
    .join(" ");

  const stateClass = state ? `is-${state}` : "";

  const selectClasses = [stateClass].filter(Boolean).join(" ");

  return (
    <div className={rootClasses}>
      <select className={selectClasses} style={style} {...props}></select>
    </div>
  );
};
