import { ComponentProps, ReactNode } from "react";

interface SkeletonProps extends ComponentProps<"div"> {
  /**
   * If true, the skeleton will be rendered as lines and will require
   * `<div />` elements as children.
   */
  isLines?: boolean;
  children: ReactNode;
}

export const Skeleton = ({ isLines, children }: SkeletonProps) => {
  const classes = isLines ? "skeleton-lines" : "skeleton-block";

  return <div className={classes}>{children}</div>;
};
