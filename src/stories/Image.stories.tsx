import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Image, ImageProps } from "../components/Image";

export default {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile Image component based on Bulma classes with options for size, rounding, aspect ratio, and extended img element properties.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "The source URL of the image",
    },
    alt: {
      control: "text",
      description: "Alternative text for the image",
    },
    isRounded: {
      control: "boolean",
      description: "Applies rounded corners to the image",
    },
    size: {
      control: "select",
      options: [
        "16x16",
        "24x24",
        "32x32",
        "48x48",
        "64x64",
        "96x96",
        "128x128",
      ],
      description: "Fixed size for the image",
    },
    ratio: {
      control: "select",
      options: [
        "square",
        "1by1",
        "5by4",
        "4by3",
        "3by2",
        "5by3",
        "16by9",
        "2by1",
        "3by1",
        "4by5",
        "3by4",
        "2by3",
        "3by5",
        "9by16",
        "1by2",
        "1by3",
      ],
      description: "Aspect ratio for the image container",
    },
    containerProps: {
      control: "object",
      description: "Additional props for the figure element",
    },
  },
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

const defaultImageSrc =
  "https://files.markdown.space/d11d5afa-6393-42e4-9912-893aa419896c/-M.png";

export const Default: Story = {
  args: {
    src: defaultImageSrc,
    alt: "Ant Design logo",
  },
};

export const Rounded: Story = {
  args: {
    src: defaultImageSrc,
    alt: "Rounded Ant Design logo",
    isRounded: true,
    size: "128x128",
    style: { objectFit: "none", border: "2px solid #333" },
  },
};

export const Skeleton: Story = {
  args: {
    src: defaultImageSrc,
    alt: "Rounded Ant Design logo",
    isRounded: true,
    isSkeleton: true,
    size: "128x128",
    style: { objectFit: "none", border: "2px solid #333" },
  },
};

export const FixedSize: Story = {
  args: {
    src: defaultImageSrc,
    alt: "Fixed size Ant Design logo",
    size: "128x128",
  },
};

export const AspectRatio: Story = {
  args: {
    src: defaultImageSrc,
    alt: "Ant Design logo with aspect ratio",
    ratio: "16by9",
    size: "128x128",
  },
};

export const WithContainerProps: Story = {
  args: {
    src: defaultImageSrc,
    alt: "Ant Design logo with container styles",
    containerProps: {
      style: {
        border: "2px solid #1890ff",
        padding: "10px",
        borderRadius: "8px",
      },
    },
  },
};

export const WithImageProps: Story = {
  args: {
    src: defaultImageSrc,
    alt: "Ant Design logo with image styles",
    style: {
      filter: "grayscale(100%)",
      transition: "filter 0.3s ease-in-out",
    },
    onMouseEnter: (e) => {
      e.currentTarget.style.filter = "grayscale(0%)";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.filter = "grayscale(100%)";
    },
  },
};

export const ImageSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {["16x16", "24x24", "32x32", "48x48", "64x64", "96x96", "128x128"].map(
        (size) => (
          <Image
            key={size}
            src={defaultImageSrc}
            alt={`Ant Design logo size ${size}`}
            size={size as ImageProps["size"]}
          />
        ),
      )}
    </div>
  ),
};

export const AspectRatios: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {[
        "square",
        "1by1",
        "5by4",
        "4by3",
        "3by2",
        "5by3",
        "16by9",
        "2by1",
        "3by1",
        "4by5",
        "3by4",
        "2by3",
        "3by5",
        "9by16",
        "1by2",
        "1by3",
      ].map((ratio) => (
        <div key={ratio} style={{ width: "200px" }}>
          <Image
            src={defaultImageSrc}
            alt={`Ant Design logo ratio ${ratio}`}
            ratio={ratio as ImageProps["ratio"]}
            style={{ objectFit: "cover" }}
          />
          <p>{ratio}</p>
        </div>
      ))}
    </div>
  ),
};

export const RoundedImages: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {["32x32", "64x64", "128x128"].map((size) => (
        <Image
          key={size}
          src={defaultImageSrc}
          alt={`Rounded Ant Design logo size ${size}`}
          size={size as ImageProps["size"]}
          isRounded
          style={{ objectFit: "none", border: "2px solid #333" }}
        />
      ))}
    </div>
  ),
};
