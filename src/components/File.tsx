import type { ComponentProps, ReactNode } from "react";

export interface FileProps
  extends Omit<ComponentProps<"input">, "type" | "size"> {
  inputName: string;
  label: ReactNode;
  icon?: ReactNode;
  fileName?: ReactNode;
  isRight?: boolean;
  isCentered?: boolean;
  isFullwidth?: boolean;
  isBoxed?: boolean;
  color?: "primary" | "info" | "warning" | "danger";
  size?: "small" | "normal" | "medium" | "large";
}

export const File = ({
  inputName,
  label,
  icon,
  fileName,
  isRight,
  isCentered,
  isFullwidth,
  isBoxed,
  color,
  size,
  ...props
}: FileProps) => {
  const baseClasses = "file";
  const hasNameClasses = fileName ? "has-name" : "";
  const isRightClasses = isRight && fileName ? "is-right" : "";
  const isCenteredClasses = isCentered ? "is-centered" : "";
  const isFullwidthClasses = isFullwidth ? "is-fullwidth" : "";
  const isBoxedClasses = isBoxed ? "is-boxed" : "";
  const colorClasses = color ? `is-${color}` : "";
  const sizeClasses = size ? `is-${size}` : "";

  const classes = [
    baseClasses,
    hasNameClasses,
    isRightClasses,
    isCenteredClasses,
    isFullwidthClasses,
    isBoxedClasses,
    colorClasses,
    sizeClasses,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <label className="file-label">
        <input className="file-input" type="file" name={inputName} {...props} />
        <span className="file-cta">
          {icon && <span className="file-icon">{icon}</span>}
          {label && <span className="file-label">{label}</span>}
        </span>
        {fileName && <span className="file-name">{fileName}</span>}
      </label>
    </div>
  );
};
