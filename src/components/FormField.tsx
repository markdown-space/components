import { ComponentProps, ReactNode } from "react";

export type FormFieldSize = "small" | "normal" | "medium" | "large";
export type FormFieldColor =
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger";
export type FormFieldState = "hovered" | "focused" | "loading";

export interface FormFieldProps {
  label?: ReactNode;
  labelProps?: Omit<ComponentProps<"label">, "children">;
  helperText?: ReactNode;
  helperTextProps?: Omit<ComponentProps<"p">, "children">;
  inputProps?: ComponentProps<"input">;
  size?: FormFieldSize;
  color?: FormFieldColor;
  state?: FormFieldState;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isHorizontal?: boolean;
  isGrouped?: boolean;
  children?: ReactNode;
}

export const FormField = ({
  label,
  labelProps,
  helperText,
  helperTextProps,
  inputProps,
  size,
  color,
  state,
  icon,
  iconPosition = "left",
  isHorizontal,
  isGrouped,
  children,
}: FormFieldProps) => {
  const fieldClasses = [
    "field",
    isHorizontal && "is-horizontal",
    isGrouped && "is-grouped",
  ]
    .filter(Boolean)
    .join(" ");

  const labelClasses = ["label", size && `is-${size}`, labelProps?.className]
    .filter(Boolean)
    .join(" ");

  const controlClasses = [
    "control",
    icon && `has-icons-${iconPosition}`,
    state === "loading" && "is-loading",
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = [
    "input",
    size && `is-${size}`,
    color && `is-${color}`,
    state && state !== "loading" && `is-${state}`,
    inputProps?.className,
  ]
    .filter(Boolean)
    .join(" ");

  const helperTextClasses = [
    "help",
    color && `is-${color}`,
    helperTextProps?.className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={fieldClasses}>
      {isHorizontal && label && (
        <div className="field-label">
          <label {...labelProps} className={labelClasses}>
            {label}
          </label>
        </div>
      )}
      <div className={isHorizontal ? "field-body" : undefined}>
        {!isHorizontal && label && (
          <label {...labelProps} className={labelClasses}>
            {label}
          </label>
        )}
        <div className={controlClasses}>
          {children || <input {...inputProps} className={inputClasses} />}
          {icon && (
            <span className={`icon is-small is-${iconPosition}`}>{icon}</span>
          )}
          {helperText && (
            <p {...helperTextProps} className={helperTextClasses}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
