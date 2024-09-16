import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Card } from "../components/Card";

const meta = {
  title: "Bulma Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    image: (
      <figure className="image is-4by3">
        <img
          src="https://bulma.io/assets/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    ),
    children: (
      <div>
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/assets/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
        </div>
      </div>
    ),
  },
  render: (args) => <Card {...args} style={{ width: "300px" }} />,
};
