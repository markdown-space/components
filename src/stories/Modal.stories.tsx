import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useState } from "react";
import { Block } from "../components/Block";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    padding: 0,
    docs: {
      description: {
        component:
          "A versatile Modal component with various configurations for enhanced user interaction and customization.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title text displayed at the top of the modal. ",
    },
    closeOnBackgroundClick: {
      control: "boolean",
      description:
        "Determines whether the modal should close when the user clicks on the background overlay.",
    },
    closeOnEsc: {
      control: "boolean",
      description:
        "Specifies if the modal should close when the user presses the Escape key.",
    },
    showCloseButton: {
      control: "boolean",
      description:
        "Controls the visibility of the close button in the modal. When true, displays a clickable close icon.",
    },
    className: {
      control: "text",
      description:
        "Additional CSS class names to be applied to the modal container.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWrapper = (
  props: Omit<ComponentProps<typeof Modal>, "isActive" | "onClose">,
) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Block
      style={{ padding: "10rem", display: "grid", placeContent: "center" }}
    >
      <Button color="primary" onClick={() => setIsActive(true)}>
        Open Modal
      </Button>
      <Modal {...props} isOpen={isActive} onClose={() => setIsActive(false)} />
    </Block>
  );
};

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Block
        style={{ padding: "16rem", display: "grid", placeContent: "center" }}
      >
        <Button color="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal
          {...args}
          title="Default Modal"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          footer={
            <div className="buttons">
              <Button color="success">Save changes</Button>
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            </div>
          }
        >
          <p>This is the content of the modal.</p>
        </Modal>
      </Block>
    );
  },
};

export const NoFooter: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    title: "Modal without Footer",
    footer: undefined,
  },
};

export const LongContent: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    title: "Modal with Long Content",
    children: (
      <>
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <p key={i}>This is paragraph {i + 1} of the long content.</p>
          ))}
      </>
    ),
  },
};

export const CustomCloseButton: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    title: "Custom Close Button",
    showCloseButton: false,
    children: (
      <>
        <p>This modal has a custom close button in the footer.</p>
        <p>The default close button in the header is hidden.</p>
      </>
    ),
    footer: (
      <div className="buttons">
        <Button color="danger">Custom Close</Button>
      </div>
    ),
  },
};

export const NoBackgroundClose: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    title: "Can't Close on Background Click",
    closeOnBackgroundClick: false,
    children: <p>You can't close this modal by clicking on the background.</p>,
  },
};

export const CustomClassName: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    title: "Custom Class Modal",
    className: "custom-modal-class",
    children: <p>This modal has a custom class applied to it.</p>,
  },
};

export const Playground: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    title: "Playground Modal",
  },
};
