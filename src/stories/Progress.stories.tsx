import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Progress } from "../components/Progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const DefaultProgress: Story = {
  render: () => <Progress />,
};

const colors = [
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
  "dark",
] as const;
type ColorType = (typeof colors)[number];

const createProgressStory = (color: ColorType): Story => ({
  render: () => (
    <progress className={`progress is-${color}`} value="15" max="100">
      15%
    </progress>
  ),
});

export const PrimaryProgress = createProgressStory("primary");
export const LinkProgress = createProgressStory("link");
export const InfoProgress = createProgressStory("info");
export const SuccessProgress = createProgressStory("success");
export const WarningProgress = createProgressStory("warning");
export const DangerProgress = createProgressStory("danger");
export const DarkProgress = createProgressStory("dark");

export const SizedProgress: Story = {
  render: () => (
    <div>
      <progress className="progress is-small" value="15" max="100">
        15%
      </progress>
      <progress className="progress" value="30" max="100">
        30%
      </progress>
      <progress className="progress is-medium" value="45" max="100">
        45%
      </progress>
      <progress className="progress is-large" value="60" max="100">
        60%
      </progress>
    </div>
  ),
};

export const IndeterminateProgress: Story = {
  render: () => (
    <div>
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
      <progress className="progress is-danger" max="100">
        30%
      </progress>
      <progress className="progress is-medium is-dark" max="100">
        45%
      </progress>
      <progress className="progress is-large is-info" max="100">
        60%
      </progress>
    </div>
  ),
};

export const CustomValueProgress: Story = {
  render: () => (
    <progress className="progress is-primary" value="75" max="100">
      75%
    </progress>
  ),
};
