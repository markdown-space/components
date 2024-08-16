import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import React from "react";
import { Progress } from "../components/Progress";
import { Color, Size } from "../types";

export default {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A versatile Progress component based on Bulma classes with various colors and sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The current value of the progress bar (0-100)",
    },
    color: {
      control: "select",
      options: ["primary", "link", "info", "success", "warning", "danger"],
      description: "The color of the progress bar",
    },
    size: {
      control: "select",
      options: ["small", "normal", "medium", "large"],
      description: "The size of the progress bar",
    },
  },
} satisfies Meta<typeof Progress>;

type Story = StoryObj<typeof Progress>;

const ProgressContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div
    style={{ width: "100%", maxWidth: "calc(100%-2rem)", padding: "80px 20px" }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    value: 50,
  },
  decorators: [
    (Story) => (
      <ProgressContainer>
        <Story />
      </ProgressContainer>
    ),
  ],
};

export const ColorVariants: Story = {
  render: () => (
    <ProgressContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {["primary", "link", "info", "success", "warning", "danger"].map(
          (color) => (
            <Progress key={color} value={75} color={color as Color} />
          ),
        )}
      </div>
    </ProgressContainer>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <ProgressContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {["small", "normal", "medium", "large"].map((size) => (
          <Progress key={size} value={75} size={size as Size} />
        ))}
      </div>
    </ProgressContainer>
  ),
};

export const DynamicProgress: Story = {
  render: function Render() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <ProgressContainer>
        <Progress value={progress} color="primary" />
      </ProgressContainer>
    );
  },
};

export const WithLabel: Story = {
  render: function Render() {
    const progress = 66;
    return (
      <ProgressContainer>
        <Progress value={progress} color="info" />
        <p
          style={{ marginTop: "10px", textAlign: "center" }}
        >{`${progress}% complete`}</p>
      </ProgressContainer>
    );
  },
};

export const MultipleProgressBars: Story = {
  render: () => (
    <ProgressContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Progress value={30} color="primary" size="small" />
        <Progress value={50} color="info" />
        <Progress value={70} color="success" size="medium" />
        <Progress value={90} color="warning" size="large" />
      </div>
    </ProgressContainer>
  ),
};

export const ZeroProgress: Story = {
  args: {
    value: 0,
    color: "danger",
  },
  decorators: [
    (Story) => (
      <ProgressContainer>
        <Story />
      </ProgressContainer>
    ),
  ],
};

export const FullProgress: Story = {
  args: {
    value: 100,
    color: "success",
  },
  decorators: [
    (Story) => (
      <ProgressContainer>
        <Story />
      </ProgressContainer>
    ),
  ],
};
