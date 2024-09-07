import { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionItemProps,
} from "../components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Bulma Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    isMultiple: { control: "boolean" },
    color: {
      control: "select",
      options: ["primary", "link", "info", "success", "warning", "danger"],
    },
    isToggle: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const defaultItems = [
  { title: "Item 1", content: "Content for Item 1", key: "item1" },
  { title: "Item 2", content: "Content for Item 2", key: "item2" },
  { title: "Item 3", content: "Content for Item 3", key: "item3" },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const MultipleOpen: Story = {
  args: {
    items: defaultItems,
    isMultiple: true,
  },
};

export const Colored: Story = {
  args: {
    items: defaultItems,
    color: "primary",
  },
};

export const Toggle: Story = {
  args: {
    items: defaultItems,
    isToggle: true,
  },
};

export const CustomTitle: Story = {
  args: {
    items: [
      {
        title: (
          <span style={{ color: "red", fontWeight: "bold" }}>Custom Title</span>
        ),
        content: "This item has a custom title",
        key: "custom1",
      },
      ...defaultItems,
    ],
  },
};

export const CustomContent: Story = {
  args: {
    items: [
      {
        title: "Custom Content",
        content: (
          <div>
            <h3>This is a custom content</h3>
            <p>It can include any React elements</p>
            <button onClick={() => alert("Clicked!")}>Click me</button>
          </div>
        ),
        key: "custom2",
      },
      ...defaultItems,
    ],
  },
};

export const CustomStyling: Story = {
  args: {
    items: defaultItems,
    renderItem: (props) => (
      <AccordionItem
        {...props}
        style={{
          border: "2px solid #00d1b2",
          borderRadius: "8px",
          margin: "10px 0",
        }}
        contentProps={{
          style: { backgroundColor: "#f5f5f5", borderRadius: "0 0 6px 6px" },
        }}
      />
    ),
  },
};

export const NestedAccordions: Story = {
  args: {
    items: [
      {
        title: "Outer Item 1",
        content: "Outer Content 1",
        key: "outer1",
      },
      {
        title: "Nested Accordion",
        content: (
          <Accordion
            items={[
              {
                title: "Inner Item 1",
                content: "Inner Content 1",
                key: "inner1",
              },
              {
                title: "Inner Item 2",
                content: "Inner Content 2",
                key: "inner2",
              },
            ]}
            color="info"
          />
        ),
        key: "nested",
      },
      {
        title: "Outer Item 2",
        content: "Outer Content 2",
        key: "outer2",
      },
    ],
  },
};

const CustomAccordionItem = (props: AccordionItemProps) => (
  <div style={{ border: "1px solid #ddd", margin: "5px 0" }}>
    <AccordionItem {...props} />
  </div>
);

export const CustomRenderItem: Story = {
  args: {
    items: defaultItems,
    renderItem: (props) => <CustomAccordionItem {...props} />,
  },
};

export const LargeDataset: Story = {
  args: {
    items: Array.from({ length: 100 }, (_, i) => ({
      title: `Item ${i + 1}`,
      content: `Content for Item ${i + 1}`,
      key: `item${i + 1}`,
    })),
    isMultiple: true,
  },
};
