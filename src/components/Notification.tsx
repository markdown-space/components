import { ReactNode } from "react";
import { Color } from "../types";

export interface NotificationProps {
  color?: Color;
  isLight?: boolean;
  hasDelete?: boolean;
  children: ReactNode;
  onDelete?: () => void;
}

export const Notification = ({
  color,
  isLight = false,
  hasDelete = true,
  children,
  onDelete,
}: NotificationProps) => {
  const colorClass = `is-${color}${isLight ? " is-light" : ""}`;

  return (
    <div className={`notification ${colorClass}`}>
      {hasDelete && <button className="delete" onClick={onDelete}></button>}
      {children}
    </div>
  );
};
