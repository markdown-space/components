import { AnimatePresence, motion, PanInfo } from "framer-motion";
import {
  ComponentProps,
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Block } from "./Block";
import { Button } from "./Button";

interface CarouselItem {
  id: string;
  content: ReactNode;
}

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
  }),
};

const sliderTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

interface CarouselProps extends ComponentProps<"div"> {
  items: CarouselItem[];
  autoplay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

export function Carousel({
  items,
  style,
  autoplay,
  interval = 5000,
  showControls = true,
  showIndicators = true,
}: CarouselProps): JSX.Element {
  const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>(
    [0, 0],
  );

  const [isDisabled, setIsDisabled] = useState(false);

  function wrap(min: number, max: number, v: number): number {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  }

  const swipeToItem = useCallback(
    (swipeDirection: number) => {
      setIsDisabled(true);
      setActiveIndex(([prevIndex]) => [
        wrap(0, items.length, prevIndex + swipeDirection),
        swipeDirection,
      ]);

      setTimeout(() => {
        setIsDisabled(false);
      }, 500);
    },
    [items.length],
  );

  function dragEndHandler(dragInfo: PanInfo): void {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToItem(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToItem(1);
    }
  }

  function skipToItem(itemId: string): void {
    const newIndex = items.findIndex((item) => item.id === itemId);
    if (newIndex !== -1 && newIndex !== activeIndex) {
      setActiveIndex([newIndex, newIndex > activeIndex ? 1 : -1]);
    }
  }

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        swipeToItem(1);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoplay, interval, swipeToItem]);

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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "400px",
        ...style,
      }}
    >
      <Block
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
            }}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          >
            {items[activeIndex].content}
          </motion.div>
        </AnimatePresence>
        {showControls && (
          <>
            <Button
              style={{
                ...controlStyle,
                left: 10,
              }}
              disabled={isDisabled}
              onClick={() => swipeToItem(-1)}
            >
              &#10094;
            </Button>
            <Button
              style={{
                ...controlStyle,
                right: 10,
              }}
              disabled={isDisabled}
              onClick={() => swipeToItem(1)}
            >
              &#10095;
            </Button>
          </>
        )}
      </Block>
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
            <Block
              key={item.id}
              onClick={() => skipToItem(item.id)}
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
            />
          ))}
        </Block>
      )}
    </Block>
  );
}
