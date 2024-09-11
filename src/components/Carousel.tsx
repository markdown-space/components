import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Block } from "./Block";
import { Button } from "./Button";

export interface CarouselItemProps
  extends Omit<ComponentProps<"div">, "content"> {
  id: string;
  content: ReactNode;
}

export interface CarouselProps extends Omit<ComponentProps<"div">, "children"> {
  items: CarouselItemProps[];
  autoplay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
}

export const Carousel = ({
  items,
  autoplay = false,
  interval = 5000,
  showIndicators = true,
  showControls = true,
  className,
  style,
  ...props
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        setActiveIndex((current) => (current + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoplay, interval, items.length]);

  function goToNext() {
    setActiveIndex((current) => (current + 1) % items.length);
  }

  function goToPrev() {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  }

  function goToIndex(index: number) {
    setActiveIndex(index);
  }

  const controlStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
    borderRadius: "0.25rem",
  };

  return (
    <Block
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "400px",
        ...style,
      }}
      className={className}
      {...props}
    >
      {items.map((item, index) => (
        <Block
          key={item.id}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === activeIndex ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {item.content}
        </Block>
      ))}
      {showControls && (
        <>
          <Button style={{ ...controlStyle, left: "10px" }} onClick={goToPrev}>
            &#10094;
          </Button>
          <Button style={{ ...controlStyle, right: "10px" }} onClick={goToNext}>
            &#10095;
          </Button>
        </>
      )}
      {showIndicators && (
        <Block
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
          }}
        >
          {items.map((item, index) => (
            <Button
              key={item.id}
              style={{
                width: "10px",
                height: "10px",
                maxWidth: "10px",
                maxHeight: "10px",
                borderRadius: "50%",
                background:
                  index === activeIndex ? "white" : "rgba(255,255,255,0.5)",
                margin: "0 5px",
                cursor: "pointer",
                padding: 0,
              }}
              onClick={() => goToIndex(index)}
            ></Button>
          ))}
        </Block>
      )}
    </Block>
  );
};
