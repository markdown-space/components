import { PropsWithChildren } from "react";

export const HeroSection = (props: PropsWithChildren) => {
  return (
    <section className="section is-large is-flex-direction-column is-align-items-center is-justify-content-center has-text-centered">
      {props.children}
    </section>
  );
};
