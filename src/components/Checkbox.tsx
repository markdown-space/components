import { ComponentProps, ReactNode, useId } from "react";

export interface CheckboxProps extends Omit<ComponentProps<"input">, "type"> {
  isDisabled?: boolean;
  labelProps?: Omit<ComponentProps<"label">, "children">;
  children: ReactNode;
}

export const Checkbox = ({
  isDisabled,
  labelProps,
  children,
  className,
  id,
  style,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  const inputClasses = ["checkbox", className].filter(Boolean).join(" ");
  const labelClasses = ["checkbox", labelProps?.className || ""]
    .filter(Boolean)
    .join(" ");

  return (
    <label
      htmlFor={checkboxId}
      className={labelClasses}
      {...labelProps}
      style={{
        display: "flex",
        alignItems: "center",
        ...labelProps?.style,
      }}
      aria-disabled={isDisabled}
    >
      <input
        id={checkboxId}
        type="checkbox"
        disabled={isDisabled}
        className={inputClasses}
        {...props}
        style={{ marginRight: "0.5rem", ...style }}
      />
      {children}
    </label>
  );
};
