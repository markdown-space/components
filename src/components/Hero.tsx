import { ComponentProps, ReactNode } from "react";
import { Color } from "../types/shared";

export type HeroSize =
  | "small"
  | "medium"
  | "large"
  | "fullheight"
  | "halfheight";

type HeroPropsBase = {
  children: ReactNode;
  color?: Color;
};

interface HeroPropsWithoutNavbar extends HeroPropsBase {
  size?: HeroSize;
  withNavbar?: false;
}

interface HeroPropsWithNavbar extends HeroPropsBase {
  size: "fullheight";
  withNavbar: true;
}

export type HeroProps = HeroPropsWithoutNavbar | HeroPropsWithNavbar;

export const Hero = ({ children, color, size, withNavbar }: HeroProps) => {
  const baseClass = "hero";
  const colorClass = color ? `is-${color}` : "";
  let sizeClass = size ? `is-${size}` : "";

  if (size === "fullheight" && withNavbar) {
    sizeClass = "is-fullheight-with-navbar";
  }

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
