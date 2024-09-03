import { ComponentProps, ReactNode } from "react";

export interface IconProps extends ComponentProps<"span"> {
  /** Font Awesome Icon class name */
  icon: string;
}

export const Icon = ({ icon }: IconProps) => {
  const baseClass = "icon";

  const classes = [baseClass].filter(Boolean).join(" ");

  return (
    <span className={classes}>
      <i className={icon} />
    </span>
  );
};

interface IconTextProps extends ComponentProps<"span"> {
  /** All icon text must be wrapped around a span tag. */
  children: ReactNode;
}

export const IconText = ({ className, children }: IconTextProps) => {
  const baseClass = "icon-text";
  const classes = [baseClass, className].filter(Boolean).join(" ");

  return <span className={classes}>{children}</span>;
};
