import { ComponentProps, ReactNode } from "react";

export interface MessageProps extends ComponentProps<"article"> {
  color?:
    | "dark"
    | "link"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";
  header?: ReactNode;
  size?: "small" | "medium" | "large";
}

export const Message = ({ color, header, size, children }: MessageProps) => {
  const baseClasses = "message";
  const colorClass = color ? `is-${color}` : "";
  const sizeClass = size ? `is-${size}` : "";

  const classes = [baseClasses, colorClass, sizeClass]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes}>
      {header && (
        <div className="message-header">
          <p>{header}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
      )}
      <div className="message-body">{children}</div>
    </article>
  );
};
