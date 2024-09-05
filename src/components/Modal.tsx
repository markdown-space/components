import { ReactNode, useEffect, useState } from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  closeOnBackgroundClick?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  className?: string;
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  closeOnBackgroundClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  className = "",
}: ModalProps) => {
  const [isActive, setIsActive] = useState(isOpen);

  useEffect(() => {
    setIsActive(isOpen);
  }, [isOpen]);

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

  if (!isActive) return null;

  return (
    <div className={`modal ${isActive ? "is-active" : ""} ${className}`}>
      <div
        className="modal-background"
        onClick={closeOnBackgroundClick ? onClose : undefined}
      />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          {showCloseButton && (
            <button className="delete" aria-label="close" onClick={onClose} />
          )}
        </header>
        <section className="modal-card-body">{children}</section>
        {footer && <footer className="modal-card-foot">{footer}</footer>}
      </div>
    </div>
  );
};
