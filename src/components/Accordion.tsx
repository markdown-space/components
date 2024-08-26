import { AnimatePresence, motion } from "framer-motion";
import React, {
  ComponentProps,
  CSSProperties,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Color } from "../types/shared";

export interface AccordionItemProps {
  title: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  color?: Color;
  isToggle?: boolean;
  isLast: boolean;
  style?: CSSProperties;
  contentProps?: Omit<ComponentProps<"div">, "children">;
}

export const AccordionItem = React.memo(
  ({
    title,
    content,
    isOpen,
    onClick,
    color,
    isToggle,
    isLast,
    style,
    contentProps,
  }: AccordionItemProps) => {
    const colorClass = color ? `has-background-${color}` : "";
    const toggleClass = isToggle ? "is-toggle" : "";
    const headerClasses = [colorClass, toggleClass, "accordion-header"]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={`accordion-item ${isOpen ? "is-active" : ""}`}
        style={{
          borderBottom: isLast ? "none" : "1px solid #dbdbdb",
          overflow: "hidden",
          ...(style || {}),
        }}
      >
        <div
          className={headerClasses}
          onClick={onClick}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
          aria-expanded={isOpen}
          role="button"
          tabIndex={0}
        >
          {typeof title === "string" ? <p>{title}</p> : title}
          <span className="icon">
            <motion.i
              className="fas fa-angle-down"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="accordion-content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div
                style={{
                  padding: "0.5rem 1rem",
                  ...(contentProps?.style || {}),
                }}
                {...contentProps}
              >
                {content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

export interface AccordionProps {
  items: Array<{ title: ReactNode; content: ReactNode; key?: string | number }>;
  isMultiple?: boolean;
  color?: Color;
  isToggle?: boolean;
  renderItem?: (props: AccordionItemProps) => ReactNode;
}

export const Accordion = ({
  items,
  isMultiple = false,
  color,
  isToggle = false,
  renderItem,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string | number>>(new Set());

  const toggleItem = useCallback(
    (key: string | number) => {
      setOpenItems((prevOpenItems) => {
        const newOpenItems = new Set(prevOpenItems);
        if (newOpenItems.has(key)) {
          newOpenItems.delete(key);
        } else {
          if (!isMultiple) {
            newOpenItems.clear();
          }
          newOpenItems.add(key);
        }
        return newOpenItems;
      });
    },
    [isMultiple],
  );

  const memoizedItems = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        key: item.key ?? index,
      })),
    [items],
  );

  return (
    <div className="accordion">
      {memoizedItems.map((item, index) => {
        const itemProps: AccordionItemProps = {
          ...item,
          isOpen: openItems.has(item.key),
          onClick: () => toggleItem(item.key),
          color,
          isToggle,
          isLast: index === items.length - 1,
        };

        return renderItem ? (
          renderItem(itemProps)
        ) : (
          <AccordionItem key={item.key} {...itemProps} />
        );
      })}
    </div>
  );
};
