import { ComponentProps, ElementType, ReactNode } from "react";

export type Color =
  | "white"
  | "black"
  | "light"
  | "dark"
  | "primary"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger"
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
  /** Font Awesome Icon class name */
  icon: string;
  textColor?: Color;
  size?: "small" | "medium" | "large";
}

export const Icon = ({ icon, textColor, size }: IconProps) => {
  const baseClass = "icon";
  const colorClass = textColor ? `has-text-${textColor}` : "";
  const sizeClass = size ? `is-${size}` : "";

  const classes = [baseClass, colorClass, sizeClass].filter(Boolean).join(" ");

  return (
    <span className={classes}>
      <i className={icon} />
    </span>
  );
};

interface IconTextProps<T extends ElementType = "span"> {
  /** The element type to render. Defaults to "span". */
  as?: T;
  /** The content of the IconText component. */
  children: ReactNode;
  /** Additional CSS classes to apply to the component. */
  className?: string;
  textColor?: Color;
}

type IconTextComponentProps<T extends ElementType> = IconTextProps<T> &
  Omit<ComponentProps<T>, keyof IconTextProps>;

export const IconText = <T extends ElementType = "span">({
  as,
  className,
  children,
  textColor,
  ...props
}: IconTextComponentProps<T>) => {
  const Component = as || "span";
  const baseClass = "icon-text";
  const colorClass = textColor ? `has-text-${textColor}` : "";
  const classes = [baseClass, colorClass, className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
