import React, { useState } from "react";
import { Color, Size } from "../types/shared";

export interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  color?: string;
  isBoxed?: boolean;
  isToggle?: boolean;
  isLast: boolean; // New prop to identify the last item
}

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
  color,
  isBoxed,
  isToggle,
  isLast,
}: AccordionItemProps) => {
  const baseClasses = "accordion-header";
  const colorClass = color ? `has-background-${color}` : "";
  const boxedClass = isBoxed ? "is-boxed" : "";
  const toggleClass = isToggle ? "is-toggle" : "";
  const headerClasses = [baseClasses, colorClass, boxedClass, toggleClass]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`accordion-item ${isOpen ? "is-active" : ""}`}
      style={{
        borderBottom: isLast ? "none" : "1px solid #dbdbdb", // Add border bottom except for last item
      }}
    >
      <div
        className={headerClasses}
        onClick={onClick}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem 1rem", // Add some padding for better appearance
        }}
      >
        <p>{title}</p>
        <span className="icon">
          <i className={`fas fa-angle-${isOpen ? "up" : "down"}`}></i>
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content" style={{ padding: "1rem" }}>
          {content}
        </div>
      )}
    </div>
  );
};

export interface AccordionProps {
  items: Array<{ title: string; content: React.ReactNode }>;
  isMultiple?: boolean;
  isFullwidth?: boolean;
  size?: Size;
  color?: Color;
  isBoxed?: boolean;
  isToggle?: boolean;
}

export const Accordion = ({
  items,
  isMultiple = false,
  isFullwidth = false,
  size,
  color,
  isBoxed = false,
  isToggle = false,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (isMultiple) {
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(index)
          ? prevOpenItems.filter((item) => item !== index)
          : [...prevOpenItems, index],
      );
    } else {
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(index) ? [] : [index],
      );
    }
  };

  const baseClasses = "accordion";
  const sizeClass = size ? `is-${size}` : "";
  const fullwidthClass = isFullwidth ? "is-fullwidth" : "";
  const accordionClasses = [baseClasses, sizeClass, fullwidthClass]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={accordionClasses}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          isOpen={openItems.includes(index)}
          onClick={() => toggleItem(index)}
          color={color}
          isBoxed={isBoxed}
          isToggle={isToggle}
          isLast={index === items.length - 1} // Pass isLast prop
        />
      ))}
    </div>
  );
};
