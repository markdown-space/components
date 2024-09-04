import { ComponentProps, ElementType, ReactNode } from "react";
import { Color } from "../types/shared";

export type IconColor =
  | Exclude<Color, "text">
  | "black-bis"
  | "black-ter"
  | "grey-darker"
  | "grey-dark"
  | "grey"
  | "grey-light"
  | "grey-lighter"
  | "white-ter"
  | "white-bis"
  | "current"
  | "inherit";

export interface IconProps extends ComponentProps<"span"> {
  /** Font Awesome icon class name */
  icon: string;
  color?: IconColor;
  /**
   * The Font Awesome icon should also have a size modifier.
   * `https://docs.fontawesome.com/web/style/size`
   */
  size?: "small" | "medium" | "large";
}

export const Icon = ({ icon, color, size, className, ...props }: IconProps) => {
  const baseClass = "icon";
  const colorClass = color ? `has-text-${color}` : "";
  const sizeClass = size ? `is-${size}` : "";

  const classes = [baseClass, colorClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      <i className={icon} />
    </span>
  );
};

interface IconTextProps<T extends ElementType = "span"> {
  as?: T;
  children: ReactNode;
  className?: string;
  color?: IconColor;
}

type IconTextComponentProps<T extends ElementType> = IconTextProps<T> &
  Omit<ComponentProps<T>, keyof IconTextProps>;

export const IconText = <T extends ElementType = "span">({
  as,
  className,
  children,
  color,
  ...props
}: IconTextComponentProps<T>) => {
  const Component = as || "span";
  const baseClass = "icon-text";
  const colorClass = color ? `has-text-${color}` : "";
  const classes = [baseClass, colorClass, className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
