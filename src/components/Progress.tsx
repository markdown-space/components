import { ComponentProps } from "react";
import { Color, Size } from "../types/shared";

export interface ProgressProps extends ComponentProps<"progress"> {
  value: number;
  color?: Color;
  size?: Size;
}

export const Progress = ({
  value,
  color,
  size,
  className,
  ...props
}: ProgressProps) => {
  const baseClasses = "progress";
  const colorClasses = color ? `is-${color}` : "";
  const sizeClasses = size ? `is-${size}` : "";
  const progressClasses = [baseClasses, colorClasses, sizeClasses, className]
    .filter(Boolean)
    .join(" ");

  // Ensure value is between 0 and 100
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <progress
      className={progressClasses}
      max={100}
      {...(value && { value: clampedValue })}
      {...props}
    >
      {clampedValue}%
    </progress>
  );
};
