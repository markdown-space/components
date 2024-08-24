import { ComponentProps, ReactNode } from "react";
import { Size } from "../types/shared";

export type BreadcrumbProps = ComponentProps<"nav"> & {
  alignment?: "centered" | "right";
  seperator?: "arrow" | "bullet" | "dot" | "succeeds";
  size?: Exclude<Size, "normal">;
  /**
   * The children of a breadcrumb component should be `<li/>` elements.
   */
  children: ReactNode;
  /**
   * Props to pass to the `<ul/>` element.
   */
  ulProps?: Omit<ComponentProps<"ul">, "children">;
};

export const Breadcrumb = ({
  alignment,
  seperator,
  size,
  className,
  children,
  ulProps,
  ...props
}: BreadcrumbProps) => {
  const baseClasses = "breadcrumb";
  const alignmentClass = alignment ? `is-${alignment}` : "";
  const seperatorClass = seperator ? `has-${seperator}-separator` : "";
  const sizeClass = size ? `is-${size}` : "";

  const classes = [
    baseClasses,
    alignmentClass,
    seperatorClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={classes} aria-label="breadcrumbs" {...props}>
      <ul {...ulProps}>{children}</ul>
    </nav>
  );
};
