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
  const hasNameClasses = fileName ? "has-name" : baseClasses;
  const isRightClasses = isRight ? "is-right" : hasNameClasses;
  const isCenteredClasses = isCentered ? "is-centered" : isRightClasses;
  const isFullwidthClasses = isFullwidth ? "is-fullwidth" : isRightClasses;
  const isBoxedClasses = isBoxed ? "is-boxed" : isFullwidthClasses;
  const colorClasses = color ? `is-${color}` : isBoxedClasses;
  const sizeClasses = size ? `is-${size}` : colorClasses;

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
        {(!!icon || !!label) && (
          <span className="file-cta">
            {icon && <span className="file-icon">{icon}</span>}
            {label && <span className="file-label">{label}</span>}
          </span>
        )}
        {fileName && <span className="file-name">{fileName}</span>}
      </label>
    </div>
  );
};
