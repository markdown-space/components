import { CSSProperties } from "react";

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  marginBottom?: CSSProperties["marginBottom"];
}

export const Block = ({
  className,
  children,
  style,
  marginBottom,
  ...props
}: BlockProps) => {
  const baseClasses = "block";

  const classes = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={classes} style={{ ...style, marginBottom }} {...props}>
      {children}
    </div>
  );
};
