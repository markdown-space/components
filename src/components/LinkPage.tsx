import React, { useEffect } from "react";

const DefaultStyle = {
  "text-align": "center",
  width: "100%",
  maxWidth: "650px",
  margin: "0 auto",
  minHeight: "100vh",
  padding: "25vh 4em",
  display: "nonde",
};

export function LinkPage(props: {
  style?: React.CSSProperties;
  buttonClass?: string;
  buttonClasses?: string[];
  children: React.ReactNode;
}) {
  const { style, buttonClass = "default", buttonClasses = [] } = props;

  const combinedStyle = { ...DefaultStyle, ...style };

  const sectionRef = React.useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const children = Array.from(sectionRef.current.children);

      children.forEach((child: Element) => {
        const grandChild = child.children[0];

        // If the child is a paragraph and the grandchild is just a link
        if (
          child.tagName === "P" &&
          grandChild?.tagName === "A" &&
          child.textContent == grandChild?.textContent
        ) {
          child.classList.add("mb-4");
          grandChild.removeAttribute("class");
          grandChild.classList.add(
            "button",
            "is-" +
              (buttonClasses.length > 0 ? buttonClasses.shift() : buttonClass),
            "is-fullwidth",
          );
        }
      });

      sectionRef.current?.style.setProperty("display", "block");
    }
  }, [buttonClass, buttonClasses]);

  return (
    <section style={combinedStyle} ref={sectionRef}>
      {props.children}
    </section>
  );
}

export default LinkPage;
