import type { ComponentProps, ReactNode } from "react";
import { Color } from "../types/shared";

type TableProps = ComponentProps<"table"> & {
  children: ReactNode;
  isScrollable?: boolean;
  isBordered?: boolean;
  isStriped?: boolean;
  isNarrow?: boolean;
  isHoverable?: boolean;
  isFullwidth?: boolean;
};

export const Table = ({
  children,
  isScrollable,
  isBordered,
  isStriped,
  isNarrow,
  isHoverable,
  isFullwidth,
  ...props
}: TableProps) => {
  const baseClass = "table";
  const borderedClass = isBordered ? `is-bordered` : "";
  const stripedClass = isStriped ? `is-striped` : "";
  const narrowClass = isNarrow ? `is-narrow` : "";
  const hoverableClass = isHoverable ? `is-hoverable` : "";
  const fullwidthClass = isFullwidth ? `is-fullwidth` : "";

  const className = [
    baseClass,
    borderedClass,
    stripedClass,
    narrowClass,
    hoverableClass,
    fullwidthClass,
  ]
    .filter(Boolean)
    .join(" ");

  const component = (
    <table className={className} {...props}>
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
  const selectedClass = isSelected ? `is-selected` : "";
  const colorClass = color ? `is-${color}` : "";

  const className = [selectedClass, colorClass].filter(Boolean).join(" ");

  return (
    <tr className={className} {...props}>
      {children}
    </tr>
  );
};

type THProps = ComponentProps<"th"> & {
  children: ReactNode;
  color?: Color;
};

export const TH = ({ children, color, ...props }: THProps) => {
  const colorClass = color ? `is-${color}` : "";

  const className = [colorClass].filter(Boolean).join(" ");

  return (
    <th className={className} {...props}>
      {children}
    </th>
  );
};

type TDProps = ComponentProps<"td"> & {
  children: ReactNode;
  color?: Color;
};

export const TD = ({ children, color, ...props }: TDProps) => {
  const colorClass = color ? `is-${color}` : "";

  const className = [colorClass].filter(Boolean).join(" ");

  return (
    <td className={className} {...props}>
      {children}
    </td>
  );
};
