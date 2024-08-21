import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile Modal component with various configurations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    closeOnBackgroundClick: { control: "boolean" },
    closeOnEsc: { control: "boolean" },
    showCloseButton: { control: "boolean" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWrapper: React.FC<
  Omit<React.ComponentProps<typeof Modal>, "isActive" | "onClose">
> = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setIsActive(true)}>
        Open Modal
      </Button>
      <Modal
        {...props}
        isActive={isActive}
        onClose={() => setIsActive(false)}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: "Default Modal",
    children: <p>This is the content of the modal.</p>,
    footer: (setIsRendered) => (
      <div className="buttons">
        <Button color="success">Save changes</Button>
        <Button onClick={() => setIsRendered(false)}>Cancel</Button>
      </div>
    ),
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
    footer: (setIsRendered) => (
      <div className="buttons">
        <Button color="danger" onClick={() => setIsRendered(false)}>
          Custom Close
        </Button>
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
