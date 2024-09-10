import { ReactNode } from "react";

export interface TabsProps {
  alignment?: "centered" | "right" | "left";
  size?: "small" | "medium" | "large";
  isBoxed?: boolean;
  isToggle?: boolean;
  isToggleRounded?: boolean;
  isFullWidth?: boolean;
  /**
   * The children of a tabs component should be `<li/>` elements.
   */
  children: ReactNode;
}

export const Tabs = ({
  alignment = "left",
  size,
  isBoxed,
  isToggle,
  isToggleRounded,
  isFullWidth,
  children,
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
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <ul>{children}</ul>
    </div>
  );
};
