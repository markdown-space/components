import {
  ComponentPropsWithoutRef,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
} from "react";
import { Color, Size } from "../types/shared";
import { Tooltip, TooltipProps } from "./Tooltip";

type ButtonBaseProps = {
  color?: Color;
  size?: Size;
  isOutlined?: boolean;
  isInverted?: boolean;
  isRounded?: boolean;
  isLoading?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  isLight?: boolean;
  isDark?: boolean;
  isSkeleton?: boolean;
  fullWidth?: boolean;
  theme?: "light" | "dark";
  tooltip?: ReactNode;
};

type ButtonPropsWithTooltip = ButtonBaseProps & {
  tooltip: ReactNode;
  tooltipProps?: Omit<TooltipProps, "trigger" | "children">;
};

type ButtonPropsWithoutTooltip = ButtonBaseProps & {
  tooltip?: undefined;
  tooltipProps?: never;
};

type ButtonElementProps = (ButtonPropsWithTooltip | ButtonPropsWithoutTooltip) &
  Omit<
    ComponentPropsWithoutRef<"button">,
    keyof ButtonBaseProps | "tooltipProps"
  > & {
    href?: never;
  };

type AnchorElementProps = (ButtonPropsWithTooltip | ButtonPropsWithoutTooltip) &
  Omit<
    ComponentPropsWithoutRef<"a">,
    keyof ButtonBaseProps | "tooltipProps"
  > & {
    href: string;
  };

type ButtonProps = ButtonElementProps | AnchorElementProps;

type ButtonRef<T extends ButtonProps> = T extends AnchorElementProps
  ? HTMLAnchorElement
  : HTMLButtonElement;

export const Button = forwardRef(
  <T extends ButtonProps>(props: T, ref: Ref<ButtonRef<T>>) => {
    const {
      color,
      size,
      isOutlined = false,
      isInverted = false,
      isRounded = false,
      isLoading = false,
      isActive = false,
      isFocused = false,
      isHovered = false,
      fullWidth = false,
      isSkeleton = false,
      theme = undefined,
      className,
      children,
      tooltip,
      tooltipProps,
      ...rest
    } = props;

    const isAnchor = "href" in props;
    const Component = isAnchor ? "a" : "button";

    const baseClasses = "button";
    const colorClasses = color ? `is-${color}` : "";
    const sizeClasses = size ? `is-${size}` : "";
    const outlinedClass = isOutlined ? "is-outlined" : "";
    const invertedClass = isInverted ? "is-inverted" : "";
    const roundedClass = isRounded ? "is-rounded" : "";
    const loadingClass = isLoading ? "is-loading" : "";
    const activeClass = isActive ? "is-active" : "";
    const focusedClass = isFocused ? "is-focused" : "";
    const hoveredClass = isHovered ? "is-hovered" : "";
    const skeletonClass = isSkeleton ? "is-skeleton" : "";
    const fullWidthClass = fullWidth ? "is-fullwidth" : "";
    const themeClass = theme ? `is-${theme}` : "";

    const buttonClasses = [
      baseClasses,
      colorClasses,
      sizeClasses,
      outlinedClass,
      invertedClass,
      roundedClass,
      loadingClass,
      activeClass,
      focusedClass,
      hoveredClass,
      skeletonClass,
      fullWidthClass,
      themeClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const buttonProps = {
      className: buttonClasses,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: ref as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(rest as any),
    };

    if (tooltip) {
      return (
        <Tooltip
          trigger={<Component {...buttonProps}>{children}</Component>}
          {...tooltipProps}
        >
          {tooltip}
        </Tooltip>
      );
    }

    return <Component {...buttonProps}>{children}</Component>;
  },
) as <T extends ButtonProps>(
  props: T & { ref?: Ref<ButtonRef<T>> },
) => ReactElement;
