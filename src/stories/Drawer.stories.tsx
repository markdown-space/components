import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../components/Button";
import { Drawer } from "../components/Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Markdown Space Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile Drawer component with various configurations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      description: "Controls whether the drawer is open or closed",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    onClose: {
      action: "closed",
      description: "Function called when the drawer is closed",
      table: {
        type: {
          summary: "function",
        },
      },
    },
    position: {
      description: "The position of the drawer",
      table: {
        type: {
          summary: "left | right | top | bottom",
        },
      },
    },
    width: {
      control: "text",
      description:
        "The size of the drawer (width for left/right, height for top/bottom)",
      table: {
        type: {
          summary: "CSSProperties[width]",
        },
        defaultValue: { summary: "300px" },
      },
    },
    overlay: {
      control: "boolean",
      description: "Whether to show an overlay behind the drawer",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    closeOnOverlayClick: {
      control: "boolean",
      description: "Whether clicking the overlay closes the drawer",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    closeOnEsc: {
      control: "boolean",
      description: "Whether pressing the Esc key closes the drawer",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="right"
          width="300px"
          overlay={true}
          closeOnOverlayClick={true}
          closeOnEsc={true}
        >
          <div style={{ padding: "20px" }}>
            <h2>Drawer Content</h2>
            <p>This is the content of the drawer.</p>
            <Button onClick={() => setIsOpen(false)}>Close Drawer</Button>
          </div>
        </Drawer>
      </>
    );
  },
};

export const LeftPositioned: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Left Drawer</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="left"
          width="300px"
          overlay={true}
          closeOnOverlayClick={true}
          closeOnEsc={true}
        >
          <div style={{ padding: "20px" }}>
            <h2>Left Drawer Content</h2>
            <p>This drawer opens from the left side.</p>
            <Button onClick={() => setIsOpen(false)}>Close Drawer</Button>
          </div>
        </Drawer>
      </>
    );
  },
};

export const TopPositioned: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Top Drawer</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="top"
          width="200px"
          overlay={true}
          closeOnOverlayClick={true}
          closeOnEsc={true}
        >
          <div style={{ padding: "20px" }}>
            <h2>Top Drawer Content</h2>
            <p>This drawer slides down from the top.</p>
            <Button onClick={() => setIsOpen(false)}>Close Drawer</Button>
          </div>
        </Drawer>
      </>
    );
  },
};

export const BottomPositioned: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Bottom Drawer</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="bottom"
          width="200px"
          overlay={true}
          closeOnOverlayClick={true}
          closeOnEsc={true}
        >
          <div style={{ padding: "20px" }}>
            <h2>Bottom Drawer Content</h2>
            <p>This drawer slides up from the bottom.</p>
            <Button onClick={() => setIsOpen(false)}>Close Drawer</Button>
          </div>
        </Drawer>
      </>
    );
  },
};

export const NoOverlay: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Drawer (No Overlay)
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="right"
          width="300px"
          overlay={false}
          closeOnOverlayClick={false}
          closeOnEsc={true}
        >
          <div style={{ padding: "20px" }}>
            <h2>Drawer Without Overlay</h2>
            <p>This drawer has no overlay behind it.</p>
            <Button onClick={() => setIsOpen(false)}>Close Drawer</Button>
          </div>
        </Drawer>
      </>
    );
  },
};

export const PersistentDrawer: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Persistent Drawer</Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="right"
          width="300px"
          overlay={true}
          closeOnOverlayClick={false}
          closeOnEsc={false}
        >
          <div style={{ padding: "20px" }}>
            <h2>Persistent Drawer Content</h2>
            <p>This drawer doesn't close on overlay click or Esc key press.</p>
            <Button onClick={() => setIsOpen(false)}>Close Drawer</Button>
          </div>
        </Drawer>
      </>
    );
  },
};
