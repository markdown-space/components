import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { styled } from "styled-components";

export interface TooltipProps extends TooltipPrimitive.TooltipProps {
  trigger: ReactNode;
  children: ReactNode;
  providerProps?: TooltipPrimitive.TooltipProviderProps;
  contentProps?: TooltipPrimitive.TooltipContentProps;
}

export const Tooltip = ({
  trigger,
  children,
  providerProps,
  contentProps,
  ...props
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider {...providerProps}>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{trigger}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent
            sideOffset={5}
            {...contentProps}
            className={`TooltipContent${contentProps?.className ? ` ${contentProps.className}` : ""}`}
          >
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
    color: var(--bulma-title-color);
    background-color: var(--bulma-background);
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
