import { ComponentProps, ReactNode, useId } from "react";

export interface RadioProps extends Omit<ComponentProps<"input">, "type"> {
  name: string;
  value: string;
  isDisabled?: boolean;
  labelProps?: Omit<ComponentProps<"label">, "children">;
  children: ReactNode;
}

export const Radio = ({
  name,
  value,
  isDisabled,
  labelProps,
  children,
  className,
  id,
  ...props
}: RadioProps) => {
  const generatedId = useId();
  const radioId = id || generatedId;

  const inputClasses = ["radio", className].filter(Boolean).join(" ");
  const labelClasses = ["radio", labelProps?.className || ""]
    .filter(Boolean)
    .join(" ");

  return (
    <label
      htmlFor={radioId}
      className={labelClasses}
      {...labelProps}
      aria-disabled={isDisabled}
    >
      <input
        id={radioId}
        type="radio"
        name={name}
        value={value}
        className={inputClasses}
        {...props}
        disabled={isDisabled}
      />
      {children}
    </label>
  );
};

export type RadioListProps = ComponentProps<"div">;

export const RadioList = ({
  className,
  children,
  ...props
}: RadioListProps) => {
  return (
    <div className={`radio-list${!!className && ` ${className}`}`} {...props}>
      {children}
    </div>
  );
};
