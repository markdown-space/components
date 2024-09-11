import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Block } from "../components/Block";
import { Carousel } from "../components/Carousel";

export default {
  title: "Bulma Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Carousel component for cycling through elements.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    autoplay: {
      control: "boolean",
      description: "Whether the carousel should autoplay",
    },
    interval: {
      control: "number",
      description: "The interval between slides in milliseconds",
    },
    showIndicators: {
      control: "boolean",
      description: "Whether to show slide indicators",
    },
    showControls: {
      control: "boolean",
      description: "Whether to show next/previous controls",
    },
    items: {
      description: "The carousel items to display",
    },
  },
} satisfies Meta<typeof Carousel>;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    items: [
      {
        id: "1",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 1
            </p>
          </Block>
        ),
      },
      {
        id: "2",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 2
            </p>
          </Block>
        ),
      },
      {
        id: "3",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 3
            </p>
          </Block>
        ),
      },
    ],
  },
};

export const Autoplay: Story = {
  args: {
    items: [
      {
        id: "1",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 1
            </p>
          </Block>
        ),
      },
      {
        id: "2",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 2
            </p>
          </Block>
        ),
      },
      {
        id: "3",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 3
            </p>
          </Block>
        ),
      },
    ],
    autoplay: true,
    interval: 3000,
  },
};

export const WithoutIndicators: Story = {
  args: {
    items: [
      {
        id: "1",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 1
            </p>
          </Block>
        ),
      },
      {
        id: "2",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 2
            </p>
          </Block>
        ),
      },
      {
        id: "3",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 3
            </p>
          </Block>
        ),
      },
    ],
    showIndicators: false,
  },
};

export const WithoutControls: Story = {
  args: {
    items: [
      {
        id: "1",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 1
            </p>
          </Block>
        ),
      },
      {
        id: "2",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 2
            </p>
          </Block>
        ),
      },
      {
        id: "3",
        content: (
          <Block
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundImage:
                "url(https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Slide 3
            </p>
          </Block>
        ),
      },
    ],
    showControls: false,
  },
};
