import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";
import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Position = "left" | "right" | "top" | "bottom";

type DrawerBaseProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: Position;
  size?: string;
  overlay?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
};

type DrawerProps = DrawerBaseProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof DrawerBaseProps>;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen,
      onClose,
      position = "right",
      size = "300px",
      overlay = true,
      closeOnOverlayClick = true,
      closeOnEsc = true,
      className,
      children,
      style,
      ...rest
    },
    ref,
  ) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      return () => setMounted(false);
    }, []);

    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (closeOnEsc && event.key === "Escape") {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleEsc);
      }

      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    }, [isOpen, closeOnEsc, onClose]);

    const getInitialPosition = (): { [key: string]: string } => {
      switch (position) {
        case "left":
          return { left: `-100%` };
        case "right":
          return { right: `-100%` };
        case "top":
          return { top: `-100%` };
        case "bottom":
          return { bottom: `-100%` };
        default:
          return { right: `-100%` };
      }
    };

    const drawerStyle: CSSProperties = {
      position: "fixed",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
      ...(position === "left" || position === "right"
        ? { top: 0, bottom: 0, width: size }
        : { left: 0, right: 0, height: size }),
      ...getInitialPosition(),
      ...style,
    };

    const variants: Variants = {
      open: { [position]: 0 },
      closed: { ...getInitialPosition(), transition: { duration: 1 } },
    };

    const content = (
      <AnimatePresence>
        {isOpen && (
          <>
            {overlay && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 999,
                  pointerEvents: !isOpen ? "none" : "auto",
                }}
                onClick={closeOnOverlayClick ? onClose : undefined}
              />
            )}
            <motion.div
              ref={ref}
              className={className}
              style={drawerStyle}
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              transition={{ type: "tween", duration: 0.3 }}
              {...(rest as MotionProps)}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );

    return mounted ? createPortal(content, document.body) : null;
  },
);
