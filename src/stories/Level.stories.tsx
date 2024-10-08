import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Level } from "../components/Level";

const meta = {
  title: "Bulma Components/Level",
  component: Level,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Level>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLevel: Story = {
  render: () => <Level />,
};

export const LevelWithLeftAndRight: Story = {
  render: () => (
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <p className="subtitle is-5">
            <strong>123</strong> posts
          </p>
        </div>
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input className="input" type="text" placeholder="Find a post" />
            </p>
            <p className="control">
              <button className="button">Search</button>
            </p>
          </div>
        </div>
      </div>
      <div className="level-right">
        <p className="level-item">
          <strong>All</strong>
        </p>
        <p className="level-item">
          <a>Published</a>
        </p>
        <p className="level-item">
          <a>Drafts</a>
        </p>
        <p className="level-item">
          <a>Deleted</a>
        </p>
        <p className="level-item">
          <a className="button is-success">New</a>
        </p>
      </div>
    </nav>
  ),
};

export const CenteredLevel: Story = {
  render: () => (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Tweets</p>
          <p className="title">3,456</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Following</p>
          <p className="title">123</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Followers</p>
          <p className="title">456K</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Likes</p>
          <p className="title">789</p>
        </div>
      </div>
    </nav>
  ),
};

export const LevelAsNavigation: Story = {
  render: () => (
    <nav className="level">
      <p className="level-item has-text-centered">
        <a className="link is-info">Home</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Menu</a>
      </p>
      <p className="level-item has-text-centered">
        <img
          src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
          alt=""
          style={{ height: "30px" }}
        />
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Reservations</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info">Contact</a>
      </p>
    </nav>
  ),
};
