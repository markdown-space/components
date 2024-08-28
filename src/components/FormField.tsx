import { ComponentProps, ReactNode } from "react";

interface FormFieldProps {
  label?: ReactNode;
  labelProps: Omit<ComponentProps<"label">, "children">;
  helperText?: ReactNode;
  helperTextProps?: Omit<ComponentProps<"p">, "children">;
}

export const FormField = ({
  label,
  labelProps,
  helperText,
  helperTextProps,
}: FormFieldProps) => {
  return (
    <div className="field">
      {label && (
        <label
          {...labelProps}
          className={`label${labelProps?.className && ` ${labelProps?.className}`}`}
        >
          {label}
        </label>
      )}
      <div className="control">
        <input className="input" type="text" placeholder="Text input"></input>
      </div>
      {helperText && (
        <p
          {...helperTextProps}
          className={`help${helperTextProps?.className && ` ${helperTextProps?.className}`}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
