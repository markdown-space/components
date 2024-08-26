import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Accordion } from "../components/Accordion";
import { Color } from "../types/shared";

const colors: Color[] = [
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
];

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Accordion component with animations and various styles.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of items to display in the accordion",
    },
    isMultiple: {
      control: "boolean",
      description: "Allow multiple items to be open simultaneously",
    },
    color: {
      control: "select",
      options: colors,
      description: "The color of the accordion",
    },
    isToggle: {
      control: "boolean",
      description: "Apply a toggle style to the accordion",
    },
  },
} satisfies Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

const defaultItems = [
  { title: "Item 1", content: "Content for item 1" },
  { title: "Item 2", content: "Content for item 2" },
  { title: "Item 3", content: "Content for item 3" },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const Multiple: Story = {
  args: {
    items: defaultItems,
    isMultiple: true,
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div>
      {colors.map((color) => (
        <Accordion
          key={color}
          items={[
            {
              title: `${color.charAt(0).toUpperCase() + color.slice(1)} Accordion`,
              content: `This is a ${color} accordion.`,
            },
          ]}
          color={color}
        />
      ))}
    </div>
  ),
};

export const Toggle: Story = {
  args: {
    items: defaultItems,
    isToggle: true,
  },
};

export const ComplexContent: Story = {
  args: {
    items: [
      {
        title: "Item with React element",
        content: (
          <div>
            <h3 className="title is-5">This is a header</h3>
            <p>This is a paragraph</p>
            <button
              className="button is-primary"
              onClick={() => alert("Button clicked!")}
            >
              Click me!
            </button>
          </div>
        ),
      },
      {
        title: "Item with long content",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
      },
    ],
  },
};

export const WithNestedAccordion: Story = {
  args: {
    items: [
      {
        title: "Outer Item 1",
        content: "Outer content 1",
      },
      {
        title: "Outer Item 2 with nested accordion",
        content: (
          <Accordion
            items={[
              { title: "Nested Item 1", content: "Nested content 1" },
              { title: "Nested Item 2", content: "Nested content 2" },
            ]}
            color="info"
          />
        ),
      },
      {
        title: "Outer Item 3",
        content: "Outer content 3",
      },
    ],
    isMultiple: true,
  },
};

export const Playground: Story = {
  args: {
    items: defaultItems,
    isMultiple: false,
    color: "primary",
    isToggle: false,
  },
};
