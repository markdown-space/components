import { ComponentProps, ReactNode } from "react";
import { Color } from "../types/shared";

export type HeroSize =
  | "small"
  | "medium"
  | "large"
  | "fullheight"
  | "halfheight";

export interface HeroProps {
  children: ReactNode;
  color?: Color;
  size?: HeroSize;
}

export const Hero = ({ children, color, size }: HeroProps) => {
  const baseClass = "hero";
  const colorClass = color ? `is-${color}` : "";
  const sizeClass = size ? `is-${size}` : "";

  const classes = [baseClass, colorClass, sizeClass].filter(Boolean).join(" ");

  const childrenNode =
    size && ["fullheight", "halfheight"].includes(size) ? (
      <div>{children}</div>
    ) : (
      children
    );

  return (
    <section className={classes} id="hero">
      <div className="hero-body">{childrenNode}</div>
    </section>
  );
};

export interface HeroTitleProps extends ComponentProps<"p"> {
  children: ReactNode;
}

export const HeroTitle = ({ children, style }: HeroTitleProps) => {
  return (
    <p className="title" style={style}>
      {children}
    </p>
  );
};

export interface HeroSubtitleProps extends ComponentProps<"p"> {
  children: ReactNode;
}

export const HeroSubtitle = ({ children, style }: HeroSubtitleProps) => {
  return (
    <p className="subtitle" style={style}>
      {children}
    </p>
  );
};
