import { ComponentProps } from "react";

export interface TabItemProps extends ComponentProps<"li"> {
  id: string;
  isActive?: boolean;
  label: string;
  href?: ComponentProps<"a">["href"];
  target?: ComponentProps<"a">["target"];
}

export interface TabsProps extends Omit<ComponentProps<"div">, "children"> {
  alignment?: "centered" | "right" | "left";
  size?: "small" | "medium" | "large";
  isBoxed?: boolean;
  isToggle?: boolean;
  isToggleRounded?: boolean;
  isFullWidth?: boolean;
  items?: TabItemProps[];
}

export const Tabs = ({
  alignment = "left",
  size,
  isBoxed,
  isToggle,
  isToggleRounded,
  isFullWidth,
  className,
  items = [],
  ...props
}: TabsProps) => {
  const baseClasses = "tabs";
  const alignmentClass = alignment ? `is-${alignment}` : "";
  const sizeClass = size ? `is-${size}` : "";
  const boxedClass = isBoxed ? "is-boxed" : "";
  const toggleClass = isToggle ? "is-toggle" : "";
  const toggleRoundedClass = isToggleRounded ? "is-toggle-rounded" : "";
  const fullWidthClass = isFullWidth ? "is-fullwidth" : "";

  const classes = [
    baseClasses,
    alignmentClass,
    sizeClass,
    boxedClass,
    toggleClass,
    toggleRoundedClass,
    fullWidthClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      <ul>
        {items.map(({ id, isActive, href, target, label, ...itemProps }) => {
          return (
            <li key={id} className={isActive ? "is-active" : ""} {...itemProps}>
              <a {...(href && { href })} {...(target && { target })}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
