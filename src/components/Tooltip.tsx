import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { styled } from "styled-components";

export interface TooltipProps {
  trigger: ReactNode;
  children: ReactNode;
}

export const Tooltip = ({ trigger, children }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{trigger}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent className="TooltipContent" sideOffset={5}>
            {children}
            <TooltipPrimitive.Arrow className="TooltipArrow" />
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export const TooltipContent = styled(TooltipPrimitive.Content)`
  /* reset */
  button {
    all: unset;
  }

  &.TooltipContent {
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 15px;
    line-height: 1;
    color: var(--violet-11);
    background-color: var(--bulma-background);
    /* box-shadow: 0 2px 6px #00000026; */
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }
  .TooltipContent[data-state="delayed-open"][data-side="top"] {
    animation-name: slideDownAndFade;
  }
  .TooltipContent[data-state="delayed-open"][data-side="right"] {
    animation-name: slideLeftAndFade;
  }
  .TooltipContent[data-state="delayed-open"][data-side="bottom"] {
    animation-name: slideUpAndFade;
  }
  .TooltipContent[data-state="delayed-open"][data-side="left"] {
    animation-name: slideRightAndFade;
  }

  .TooltipArrow {
    fill: var(--bulma-background);
  }

  .IconButton {
    font-family: inherit;
    border-radius: 100%;
    height: 35px;
    width: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--violet-11);
    background-color: white;
    box-shadow: 0 2px 10px var(--black-a7);
    user-select: none;
  }
  .IconButton:hover {
    background-color: var(--violet-3);
  }
  .IconButton:focus {
    box-shadow: 0 0 0 2px black;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
