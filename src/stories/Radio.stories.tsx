import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Radio, RadioList } from "../components/Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A customizable Radio component with label support and a RadioList component for grouping.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The name attribute for the radio input",
    },
    value: {
      control: "text",
      description: "The value attribute for the radio input",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables the radio input",
    },
    children: {
      control: "text",
      description: "The label text for the radio input",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the input",
    },
    labelProps: {
      control: "object",
      description: "Additional props for the label element",
    },
    style: {
      control: "object",
      description: "Custom styles for the input element",
    },
  },
};

export default meta;

type RadioStory = StoryObj<typeof Radio>;
type RadioListStory = StoryObj<typeof RadioList>;

export const Default: RadioStory = {
  args: {
    name: "default-radio",
    value: "option1",
    children: "Default Radio",
  },
};

export const Checked: RadioStory = {
  args: {
    name: "checked-radio",
    value: "option1",
    children: "Checked Radio",
    defaultChecked: true,
  },
};

export const Disabled: RadioStory = {
  args: {
    name: "disabled-radio",
    value: "option1",
    children: "Disabled Radio",
    isDisabled: true,
  },
};

export const DisabledChecked: RadioStory = {
  args: {
    name: "disabled-checked-radio",
    value: "option1",
    children: "Disabled Checked Radio",
    isDisabled: true,
    defaultChecked: true,
  },
};

export const WithCustomClass: RadioStory = {
  args: {
    name: "custom-class-radio",
    value: "option1",
    children: "Custom Class Radio",
    className: "has-background-primary-light",
  },
};

export const WithLabelProps: RadioStory = {
  args: {
    name: "label-props-radio",
    value: "option1",
    children: "Radio with Custom Label",
    labelProps: {
      className: "has-text-weight-bold has-text-primary",
    },
  },
};

export const WithCustomStyle: RadioStory = {
  args: {
    name: "custom-style-radio",
    value: "option1",
    children: "Radio with Custom Style",
    style: { transform: "scale(1.5)" },
  },
};

export const WithHTMLInLabel: RadioStory = {
  args: {
    name: "html-label-radio",
    value: "option1",
    children: (
      <>
        I agree to the <a href="#">terms and conditions</a>
      </>
    ),
  },
};

export const RadioGroup: RadioListStory = {
  render: () => (
    <RadioList>
      <Radio name="radio-group" value="option1">
        Option 1
      </Radio>
      <Radio name="radio-group" value="option2">
        Option 2
      </Radio>
      <Radio name="radio-group" value="option3">
        Option 3
      </Radio>
    </RadioList>
  ),
};

export const RadioGroupWithDisabled: RadioListStory = {
  render: () => (
    <RadioList>
      <Radio name="radio-group-disabled" value="option1">
        Option 1
      </Radio>
      <Radio name="radio-group-disabled" value="option2" isDisabled>
        Option 2 (Disabled)
      </Radio>
      <Radio name="radio-group-disabled" value="option3">
        Option 3
      </Radio>
    </RadioList>
  ),
};

export const RadioGroupHorizontal: RadioListStory = {
  render: () => (
    <RadioList style={{ display: "flex", gap: "0.5rem" }}>
      <Radio name="radio-group-horizontal" value="option1">
        Option 1
      </Radio>
      <Radio name="radio-group-horizontal" value="option2">
        Option 2
      </Radio>
      <Radio name="radio-group-horizontal" value="option3">
        Option 3
      </Radio>
    </RadioList>
  ),
};
