import { ReactNode } from "react";

export interface TabsProps {
  alignment?: "centered" | "right" | "left";
  size?: "small" | "medium" | "large";
  /**
   * The children of a tabs component should be `<li/>` elements.
   */
  children: ReactNode;
}

export const Tabs = ({ alignment = "left", size, children }: TabsProps) => {
  const baseClasses = "tabs";
  const alignmentClass = alignment ? `is-${alignment}` : "";
  const sizeClass = size ? `is-${size}` : "";

  const classes = [baseClasses, alignmentClass, sizeClass]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <ul>{children}</ul>
    </div>
  );
};
