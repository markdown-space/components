import { ComponentProps, ReactNode } from "react";

export interface CardProps extends ComponentProps<"div"> {
  header?: ReactNode;
  image?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

export const Card = ({
  header,
  image,
  footer,
  children,
  ...props
}: CardProps) => {
  return (
    <div className="card" {...props}>
      {header && <header className="card-header">{header}</header>}
      {image && <div className="card-image">{image}</div>}
      <div className="card-content">{children}</div>
      {footer && <footer className="card-footer">{footer}</footer>}
    </div>
  );
};
