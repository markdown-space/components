import { CSSProperties, ReactNode } from "react";
import { Color } from "../types";

export interface NotificationProps {
  color?: Color;
  isLight?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  deleteButtonStyle?: CSSProperties;
  hasDelete?: boolean;
  onDelete?: () => void;
}

export const Notification = ({
  color,
  isLight = false,
  hasDelete = true,
  className,
  children,
  style,
  onDelete,
  deleteButtonStyle,
}: NotificationProps) => {
  const baseClasses = "notification";
  const colorClass = color ? `is-${color}` : "";
  const isLightClass = isLight ? "is-light" : "";

  const classes = [baseClasses, colorClass, isLightClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style}>
      {hasDelete && (
        <button
          className="delete"
          onClick={onDelete}
          style={{ top: "0.5rem", right: "0.5rem", ...deleteButtonStyle }}
        ></button>
      )}
      {children}
    </div>
  );
};
