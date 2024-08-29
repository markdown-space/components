import { ComponentProps } from "react";
import { Size } from "../types/shared";

export interface TextareaProps extends ComponentProps<"textarea"> {
  placeholder?: string;
  rows?: number;
  color?: "link" | "primary" | "info" | "success" | "warning" | "danger";
  size?: Size;
  disabled?: boolean;
  readonly?: boolean;
  hasFixedSize?: boolean;
  state?: "hovered" | "focused" | "active";
}

export const Textarea = ({
  placeholder,
  rows,
  color,
  size,
  disabled,
  readOnly,
  hasFixedSize,
  state,
}: TextareaProps) => {
  const baseClass = "textarea";
  const colorClass = color ? `is-${color}` : "";
  const sizeClass = size ? `is-${size}` : "";
  const fixedSizeClass = hasFixedSize ? "has-fixed-size" : "";
  const stateClass = state ? `is-${state}` : "";

  const classes = [baseClass, colorClass, sizeClass, fixedSizeClass, stateClass]
    .filter(Boolean)
    .join(" ");

  return (
    <textarea
      className={classes}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      readOnly={readOnly}
    ></textarea>
  );
};
