import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Panel } from "../components/Panel";

const meta = {
  title: "Bulma Components/Panel",
  component: Panel,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof Panel>;

export const DefaultPanel: Story = {
  render: () => <Panel />,
};

export const SimplePanel: Story = {
  render: () => (
    <nav className="panel">
      <p className="panel-heading">Repositories</p>
      <a className="panel-block is-active">bulma</a>
      <a className="panel-block">marksheet</a>
      <a className="panel-block">minireset.css</a>
      <a className="panel-block">jgthms.github.io</a>
    </nav>
  ),
};

export const PanelWithTabs: Story = {
  render: () => (
    <nav className="panel">
      <p className="panel-heading">Repositories</p>
      <p className="panel-tabs">
        <a className="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </p>
      <a className="panel-block is-active">bulma</a>
      <a className="panel-block">marksheet</a>
      <a className="panel-block">minireset.css</a>
      <a className="panel-block">jgthms.github.io</a>
    </nav>
  ),
};

export const PanelWithSearch: Story = {
  render: () => (
    <nav className="panel">
      <p className="panel-heading">Repositories</p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input className="input is-small" type="text" placeholder="Search" />
          <span className="icon is-small is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <a className="panel-block is-active">bulma</a>
      <a className="panel-block">marksheet</a>
      <a className="panel-block">minireset.css</a>
      <a className="panel-block">jgthms.github.io</a>
    </nav>
  ),
};

export const PanelWithCheckbox: Story = {
  render: () => (
    <nav className="panel">
      <p className="panel-heading">Repositories</p>
      <a className="panel-block is-active">bulma</a>
      <a className="panel-block">marksheet</a>
      <a className="panel-block">minireset.css</a>
      <label className="panel-block">
        <input type="checkbox" /> Remember me
      </label>
      <div className="panel-block">
        <button className="button is-primary is-outlined is-fullwidth">
          Reset all filters
        </button>
      </div>
    </nav>
  ),
};
