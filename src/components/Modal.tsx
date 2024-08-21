import { ReactNode, useEffect, useState } from "react";

export type ModalProps = {
  isActive: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: (
    setIsRendered: React.Dispatch<React.SetStateAction<boolean>>,
  ) => ReactNode;
  closeOnBackgroundClick?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  className?: string;
};

export const Modal = ({
  isActive,
  onClose,
  title,
  children,
  footer,
  closeOnBackgroundClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  className = "",
}: ModalProps) => {
  const [isRendered, setIsRendered] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === "Escape") {
        onClose();
      }
    };

    if (isActive) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isActive, closeOnEsc, onClose]);

  if (!isRendered) return null;

  return (
    <div className={`modal ${isActive ? "is-active" : ""} ${className}`}>
      <div
        className="modal-background"
        onClick={closeOnBackgroundClick ? onClose : undefined}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          {showCloseButton && (
            <button
              className="delete"
              aria-label="close"
              onClick={onClose}
            ></button>
          )}
        </header>
        <section className="modal-card-body">{children}</section>
        {footer && (
          <footer className="modal-card-foot">{footer(setIsRendered)}</footer>
        )}
      </div>
    </div>
  );
};
