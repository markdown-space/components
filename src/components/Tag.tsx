import { ComponentProps } from "react";
import { Color, Size } from "../types/shared";

export interface TagProps extends ComponentProps<"span"> {
  color?: Color;
  isLight?: boolean;
  size?: Exclude<Size, "small">;
  isHoverable?: boolean;
  isRounded?: boolean;
  isDelete?: boolean;
  isSkeleton?: boolean;
}

export const Tag = ({
  color,
  isLight,
  size,
  isHoverable,
  isRounded,
  isDelete,
  isSkeleton,
  className,
  children,
  ...props
}: TagProps) => {
  const baseClasses = "tag";
  const colorClasses = color ? `is-${color}` : "";
  const lightClasses = isLight ? "is-light" : "";
  const sizeClasses = size ? `is-${size}` : "";
  const hoverableClasses = isHoverable ? "is-hoverable" : "";
  const roundedClasses = isRounded ? "is-rounded" : "";
  const deleteClasses = isDelete ? "is-delete" : "";
  const skeletonClasses = isSkeleton ? "is-skeleton" : "";

  const classes = [
    baseClasses,
    colorClasses,
    lightClasses,
    sizeClasses,
    hoverableClasses,
    roundedClasses,
    deleteClasses,
    skeletonClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
