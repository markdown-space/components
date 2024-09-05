import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { File } from "../components/File";

const meta: Meta<typeof File> = {
  title: "Bulma Components/File",
  component: File,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A customizable File input component with various styles and configurations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    inputName: {
      control: "text",
      description: "Name attribute for the file input",
    },
    label: { control: "text", description: "Label text for the file input" },
    icon: { control: "text", description: "Icon element for the file input" },
    fileName: { control: "text", description: "File name display text" },
    isRight: {
      control: "boolean",
      description: "Align the file input to the right",
    },
    isCentered: { control: "boolean", description: "Center the file input" },
    isFullwidth: {
      control: "boolean",
      description: "Make the file input full width",
    },
    isBoxed: {
      control: "boolean",
      description: "Apply a boxed style to the file input",
    },
    color: {
      control: "select",
      options: ["primary", "info", "warning", "danger"],
      description: "Color theme for the file input",
    },
    size: {
      control: "select",
      options: ["small", "normal", "medium", "large"],
      description: "Size of the file input",
    },
  },
};

export default meta;
type Story = StoryObj<typeof File>;

export const Default: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
  },
};

export const WithIcon: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    icon: <i className="fas fa-upload"></i>,
  },
};

export const WithFileName: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    fileName: "example.jpg",
  },
};

export const RightAligned: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    fileName: "example.jpg",
    isRight: true,
  },
};

export const Centered: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    isCentered: true,
  },
};

export const Fullwidth: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    isFullwidth: true,
  },
};

export const Boxed: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    isBoxed: true,
  },
};

export const Colored: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    color: "primary",
  },
};

export const Sized: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    size: "large",
  },
};

export const ComplexConfiguration: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    icon: <i className="fas fa-cloud-upload-alt"></i>,
    fileName: "document.pdf",
    isBoxed: true,
    color: "info",
    size: "medium",
  },
};

export const Playground: Story = {
  args: {
    inputName: "file",
    label: "Choose a file...",
    icon: <i className="fas fa-file"></i>,
    fileName: "",
    isRight: false,
    isCentered: false,
    isFullwidth: false,
    isBoxed: false,
    color: undefined,
    size: undefined,
  },
};
