import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Color } from "../types/shared";

export interface AccordionItemProps {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  color?: string;
  isToggle?: boolean;
  isLast: boolean;
}

export const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
  color,
  isToggle,
  isLast,
}: AccordionItemProps) => {
  const colorClass = color ? `has-background-${color}` : "";
  const toggleClass = isToggle ? "is-toggle" : "";
  const headerClasses = [colorClass, toggleClass].filter(Boolean).join(" ");

  return (
    <div
      className={`accordion-item ${isOpen ? "is-active" : ""}`}
      style={{
        borderBottom: isLast ? "none" : "1px solid #dbdbdb", // Add border bottom except for last item
        overflow: "hidden",
      }}
    >
      <div
        className={headerClasses}
        onClick={onClick}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        <p>{title}</p>
        <span className="icon">
          <motion.i
            className="fas fa-angle-up"
            animate={{ rotate: isOpen ? 180 : 0 }}
          />
        </span>
      </div>
      <motion.div
        className="accordion-content"
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: 1,
        }}
      >
        <div style={{ padding: "0 1rem 0.5rem" }}>{content}</div>
      </motion.div>
    </div>
  );
};

export interface AccordionProps {
  items: { title: string; content: ReactNode }[];
  isMultiple?: boolean;
  color?: Color;
  isToggle?: boolean;
}

export const Accordion = ({
  items,
  isMultiple = false,
  color,
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

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          isOpen={openItems.includes(index)}
          onClick={() => toggleItem(index)}
          color={color}
          isToggle={isToggle}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};
