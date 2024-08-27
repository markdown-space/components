import { ComponentProps, ReactNode } from "react";
import { Color } from "../types/shared";

export interface HeroProps {
  color: Color;
  children: ReactNode;
}

export const Hero = ({ color, children }: HeroProps) => {
  const baseClass = "hero";
  const colorClass = color ? `is-${color}` : "";

  const classes = [baseClass, colorClass].filter(Boolean).join(" ");

  return (
    <section className={classes} id="hero">
      <div className="hero-body">{children}</div>
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
