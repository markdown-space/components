import { ComponentProps, CSSProperties } from "react";
import { Size } from "../types/shared";

export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
};

export interface SelectProps extends Omit<ComponentProps<"select">, "size"> {
  options: Option[];
  style?: CSSProperties;
  color?: "link" | "primary" | "info" | "success" | "warning" | "danger";
  size?: Size;
  isRounded?: boolean;
  isMultiple?: boolean;
  isLoading?: boolean;
  state?: "hovered" | "focused" | "active";
}

export const Select = ({
  options,
  style,
  color,
  size,
  isRounded,
  isMultiple,
  isLoading,
  state,
  ...props
}: SelectProps) => {
  const baseClass = "select";
  const colorClass = color ? `is-${color}` : "";
  const sizeClass = size ? `is-${size}` : "";
  const roundedClass = isRounded ? "is-rounded" : "";
  const multipleClass = isMultiple ? "is-multiple" : "";
  const loadingClass = isLoading ? "is-loading" : "";

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
      <select
        className={selectClasses}
        style={{ width: "100%", ...style }}
        {...props}
      >
        {options.map(({ value, label, disabled, selected }, index) => (
          <option
            key={value + index}
            value={value}
            disabled={disabled}
            selected={selected}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
