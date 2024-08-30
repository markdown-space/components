import { ComponentProps, ReactNode } from "react";

export interface CheckboxProps
  extends Omit<ComponentProps<"input">, "size" | "type"> {
  isDisabled?: boolean;
  labelProps?: Omit<ComponentProps<"label">, "children">;
  children: ReactNode;
}

export const Checkbox = ({
  isDisabled,
  labelProps,
  children,
  className,
  ...props
}: CheckboxProps) => {
  const baseClass = "select";
  const inputClasses = className ? ` ${className}` : "";

  const rootClasses = [baseClass, inputClasses].filter(Boolean).join(" ");

  const labelClass = labelProps?.className ? ` ${labelProps.className}` : "";

  const labelClasses = [labelClass].filter(Boolean).join(" ");

  return (
    <label className={rootClasses} {...labelProps} aria-disabled={isDisabled}>
      <input
        type="checkbox"
        disabled={isDisabled}
        {...props}
        className={labelClasses}
      />
      {children}
    </label>
  );
};
