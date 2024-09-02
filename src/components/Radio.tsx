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
  style,
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
      style={{
        display: "flex",
        alignItems: "center",
        ...(labelProps?.style || {}),
      }}
      aria-disabled={isDisabled}
    >
      <input
        id={radioId}
        type="radio"
        name={name}
        value={value}
        className={inputClasses}
        {...props}
        style={{ marginRight: "0.5rem", ...style }}
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
    <div className={`radios${!!className && ` ${className}`}`} {...props}>
      {children}
    </div>
  );
};
