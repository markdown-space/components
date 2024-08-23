import type { ComponentProps, ReactNode } from "react";
import { Color } from "../types";

type TableProps = ComponentProps<"table"> & {
  children: ReactNode;
  isScrollable?: boolean;
  isBordered?: boolean;
};

export const Table = ({
  children,
  isScrollable,
  isBordered,
  style,
  ...props
}: TableProps) => {
  const baseClass = "table";
  const borderedClass = isBordered ? `is-bordered` : "";

  const className = [baseClass, borderedClass].filter(Boolean).join(" ");

  const component = (
    <table className={className} style={{ width: "100%", ...style }} {...props}>
      {children}
    </table>
  );

  if (isScrollable) {
    return <div className="table-container">{component}</div>;
  }

  return component;
};

type TRProps = ComponentProps<"tr"> & {
  children: ReactNode;
  isSelected?: boolean;
  color?: Color;
};

export const TR = ({ children, isSelected, color, ...props }: TRProps) => {
  const baseClass = "table";
  const selectedClass = isSelected ? `${baseClass} is-selected` : "";
  const colorClass = color ? `is-${color}` : "";

  const className = [baseClass, selectedClass, colorClass]
    .filter(Boolean)
    .join(" ");

  return (
    <tr className={className} {...props}>
      {children}
    </tr>
  );
};
