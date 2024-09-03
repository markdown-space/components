import { HTMLAttributes } from "react";

type TitleSize = 1 | 2 | 3 | 4 | 5 | 6;
type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";

export type TitleProps = HTMLAttributes<HTMLElement> & {
  type: "title" | "subtitle";
  size: TitleSize;
  tag?: TitleTag;
  isSpaced?: boolean;
  isSkeleton?: boolean;
};

export const Title = ({
  type,
  size,
  tag,
  isSpaced,
  isSkeleton,
  className,
  children,
  ...props
}: TitleProps) => {
  const Tag = tag || (`h${size}` as TitleTag);
  const sizeClasses = `is-${size}`;
  const spacingClasses = isSpaced ? "is-spaced" : "";
  const skeletonClasses = isSkeleton ? "is-skeleton" : "";

  const classes = [
    type,
    sizeClasses,
    spacingClasses,
    skeletonClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
