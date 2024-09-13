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
      position,
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

    const positionStyles: Record<Position, CSSProperties> = {
      left: {
        top: 0,
        left: 0,
        bottom: 0,
        width: size,
        transform: isOpen ? "translateX(0)" : `translateX(-${size})`,
      },
      right: {
        top: 0,
        right: 0,
        bottom: 0,
        width: size,
        transform: isOpen ? "translateX(0)" : `translateX(${size})`,
      },
      top: {
        top: 0,
        left: 0,
        right: 0,
        height: size,
        transform: isOpen ? "translateY(0)" : `translateY(-${size})`,
      },
      bottom: {
        bottom: 0,
        left: 0,
        right: 0,
        height: size,
        transform: isOpen ? "translateY(0)" : `translateY(${size})`,
      },
    };

    const drawerStyle: CSSProperties = {
      position: "fixed",
      transition: "transform 0.3s ease-in-out",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
      ...(positionStyles?.[position || "right"] || {}),
      ...style,
    };

    const overlayStyle: CSSProperties = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 999,
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? "visible" : "hidden",
      transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
    };

    const content = (
      <>
        {overlay && (
          <div
            style={overlayStyle}
            onClick={closeOnOverlayClick ? onClose : undefined}
          />
        )}
        <div ref={ref} className={className} style={drawerStyle} {...rest}>
          {children}
        </div>
      </>
    );

    return mounted ? createPortal(content, document.body) : null;
  },
);
