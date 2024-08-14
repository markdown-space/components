export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export const Box = ({ className, children, style, ...props }: BoxProps) => {
  const baseClasses = "box";

  const classes = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  );
};
