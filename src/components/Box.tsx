import { CSSProperties, ReactNode } from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Box = ({ className, children, style, ...props }: BoxProps) => {
  const baseClasses = "box";

  const classes = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  );
};
