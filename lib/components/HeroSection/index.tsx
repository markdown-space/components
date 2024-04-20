import { PropsWithChildren } from "react";

export const HeroSection = (props: PropsWithChildren) => {
  return (
    <section className="hero-section is-flex-direction-column is-align-items-center is-jusify-content-center has-text-centered">
      {props.children}
    </section>
  );
};
