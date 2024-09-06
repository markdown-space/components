import { ComponentPropsWithoutRef, forwardRef, ReactElement, Ref } from "react";
import { Color, Size } from "../types/shared";

type ElementType = "button" | "a" | "input";

type ButtonBaseProps = {
  color?: Color;
  size?: Size;
  isOutlined?: boolean;
  isInverted?: boolean;
  isRounded?: boolean;
  isLoading?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  isLight?: boolean;
  isDark?: boolean;
  isSkeleton?: boolean;
  fullWidth?: boolean;
  theme?: "light" | "dark";
};

type ButtonTypeProps<T extends ElementType> = ButtonBaseProps &
  (T extends "button"
    ? { as?: T; type?: "submit" | "reset" | "button" }
    : T extends "input"
      ? { as: T; type?: "submit" | "reset" }
      : { as: T }) &
  Omit<ComponentPropsWithoutRef<T>, "as" | keyof ButtonBaseProps | "type">;

type ButtonPropsInput = ButtonTypeProps<"input"> & {
  children?: never;
};

type ButtonPropsNonInput<T extends ElementType> = ButtonTypeProps<T> & {
  children?: React.ReactNode;
};

export type ButtonProps<T extends ElementType = "button"> = T extends "input"
  ? ButtonPropsInput
  : ButtonPropsNonInput<T>;

type ButtonRef<T extends ElementType> = T extends "button"
  ? HTMLButtonElement
  : T extends "a"
    ? HTMLAnchorElement
    : T extends "input"
      ? HTMLInputElement
      : never;

export const Button = forwardRef(
  <T extends ElementType = "button">(
    props: ButtonProps<T>,
    ref: Ref<ButtonRef<T>>,
  ) => {
    const {
      color,
      size,
      isOutlined = false,
      isInverted = false,
      isRounded = false,
      isLoading = false,
      isActive = false,
      isFocused = false,
      isHovered = false,
      fullWidth = false,
      isSkeleton = false,
      theme = undefined,
      className,
      as,
      children,
      ...rest
    } = props;

    const Component = as || "button";
    const baseClasses = "button";
    const colorClasses = color ? `is-${color}` : "";
    const sizeClasses = size ? `is-${size}` : "";
    const outlinedClass = isOutlined ? "is-outlined" : "";
    const invertedClass = isInverted ? "is-inverted" : "";
    const roundedClass = isRounded ? "is-rounded" : "";
    const loadingClass = isLoading ? "is-loading" : "";
    const activeClass = isActive ? "is-active" : "";
    const focusedClass = isFocused ? "is-focused" : "";
    const hoveredClass = isHovered ? "is-hovered" : "";
    const skeletonClass = isSkeleton ? "is-skeleton" : "";
    const fullWidthClass = fullWidth ? "is-fullwidth" : "";
    const themeClass = theme ? `is-${theme}` : "";
    const buttonClasses = [
      baseClasses,
      colorClasses,
      sizeClasses,
      outlinedClass,
      invertedClass,
      roundedClass,
      loadingClass,
      activeClass,
      focusedClass,
      hoveredClass,
      skeletonClass,
      fullWidthClass,
      themeClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Component className={buttonClasses} ref={ref as any} {...(rest as any)}>
        {children && children}
      </Component>
    );
  },
) as <T extends ElementType = "button">(
  props: ButtonProps<T> & { ref?: Ref<ButtonRef<T>> },
) => ReactElement;
