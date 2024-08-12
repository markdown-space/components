import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Image } from "../components/Image";

const meta = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

const imageUrl =
  "https://media.licdn.com/dms/image/C560BAQHPEhawj1hjIg/company-logo_200_200/0/1630670195428?e=2147483647&v=beta&t=okitgnrzLVM2V9Uhrt8XslRihTIv6L2B7eH5AM7ATIE";

export const DefaultImage: Story = {
  render: () => <Image />,
};

export const FixedSquare: Story = {
  render: () => (
    <figure className="image is-128x128">
      <img src={imageUrl} alt="Square image" />
    </figure>
  ),
};

export const FixedRectangle: Story = {
  render: () => (
    <figure className="image is-128x96">
      <img src={imageUrl} alt="Rectangle image" />
    </figure>
  ),
};

export const Rounded: Story = {
  render: () => (
    <figure className="image is-128x128">
      <img className="is-rounded" src={imageUrl} alt="Rounded image" />
    </figure>
  ),
};
