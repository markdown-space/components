import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Block } from "../components/Block";
import { Skeleton } from "../components/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A Skeleton component for creating loading placeholders.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isLines: {
      control: "boolean",
      description: "If true, renders the skeleton as lines",
    },
    children: {
      control: "text",
      description:
        "Content within the skeleton (usually empty Blocks for lines)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    children: <Block style={{ width: "200px", height: "100px" }} />,
  },
};

export const Lines: Story = {
  args: {
    isLines: true,
    children: (
      <>
        <Block />
        <Block />
        <Block />
      </>
    ),
  },
};

export const BlockWithCustomSize: Story = {
  args: {
    children: <Block style={{ width: "300px", height: "150px" }} />,
  },
};

export const LinesWithCustomWidths: Story = {
  args: {
    isLines: true,
    children: (
      <>
        <Block style={{ width: "100%" }} marginBottom={0} />
        <Block style={{ width: "80%" }} marginBottom={0} />
        <Block style={{ width: "60%" }} marginBottom={0} />
      </>
    ),
  },
};

export const ComplexLayout: Story = {
  render: () => (
    <Block style={{ display: "flex", gap: "20px" }}>
      <Skeleton>
        <Block
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      </Skeleton>
      <Block style={{ flexGrow: 1 }}>
        <Skeleton isLines>
          <Block style={{ width: "80%" }} />
          <Block style={{ width: "60%" }} />
          <Block style={{ width: "40%" }} />
        </Skeleton>
      </Block>
    </Block>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <Block
      style={{
        width: "300px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <Skeleton>
        <Block style={{ width: "100%", height: "150px" }} />
      </Skeleton>
      <Block style={{ marginTop: "20px" }}>
        <Skeleton isLines>
          <Block />
          <Block />
          <Block style={{ width: "60%" }} />
        </Skeleton>
      </Block>
    </Block>
  ),
};

export const Playground: Story = {
  args: {
    isLines: false,
    children: <Block style={{ width: "200px", height: "100px" }} />,
  },
};
