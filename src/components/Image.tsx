import { ComponentProps } from "react";

export type ImageProps = ComponentProps<"img"> & {
  src: string;
  alt: string;
  isRounded?: boolean;
  size?: "16x16" | "24x24" | "32x32" | "48x48" | "64x64" | "96x96" | "128x128";
  ratio?:
    | "square"
    | "1by1"
    | "5by4"
    | "4by3"
    | "3by2"
    | "5by3"
    | "16by9"
    | "2by1"
    | "3by1"
    | "4by5"
    | "3by4"
    | "2by3"
    | "3by5"
    | "9by16"
    | "1by2"
    | "1by3";
  containerProps?: ComponentProps<"figure">;
};

export const Image = ({
  src,
  alt,
  isRounded,
  size,
  ratio,
  containerProps,
  ...props
}: ImageProps) => {
  const baseClasses = "image";
  const sizeClasses = size ? `is-${size}` : "";
  const roundedClass = isRounded ? "is-rounded" : "";
  const ratioClasses = ratio ? `is-${ratio}` : "";

  const figureClasses = [baseClasses, sizeClasses, ratioClasses]
    .filter(Boolean)
    .join(" ");
  const imageClasses = [size, roundedClass].filter(Boolean).join(" ");

  return (
    <figure className={figureClasses} {...containerProps}>
      <img src={src} alt={alt} className={imageClasses} {...props} />
    </figure>
  );
};
