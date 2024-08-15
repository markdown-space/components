import { HTMLAttributes } from "react";

type TitleSize = 1 | 2 | 3 | 4 | 5 | 6;
type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";

export type TitleProps = HTMLAttributes<HTMLElement> & {
  type: "title" | "subtitle";
  size: TitleSize;
  tag?: TitleTag;
  isSpaced?: boolean;
};

export const Title = ({
  type,
  size,
  tag,
  isSpaced,
  className,
  children,
  ...props
}: TitleProps) => {
  const Tag = tag || (`h${size}` as TitleTag);
  const sizeClasses = `is-${size}`;
  const spacingClasses = isSpaced ? "is-spaced" : "";

  const classes = [type, sizeClasses, spacingClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
