import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Media } from "../components/Media";

const meta = {
  title: "Components/Media",
  component: Media,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Media>;

export default meta;
type Story = StoryObj<typeof Media>;

export const DefaultMedia: Story = {
  render: () => <Media />,
};

export const SimpleMedia: Story = {
  render: () => (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img
            src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
            alt="Profile"
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small>{" "}
            <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
      </div>
      <div className="media-right">
        <button className="delete"></button>
      </div>
    </article>
  ),
};

export const MediaWithTextarea: Story = {
  render: () => (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img
            src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
            alt="Profile"
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="field">
          <p className="control">
            <textarea
              className="textarea"
              placeholder="Add a comment..."
            ></textarea>
          </p>
        </div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <a className="button is-info">Post comment</a>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <label className="checkbox">
                <input type="checkbox" /> Press enter to submit
              </label>
            </div>
          </div>
        </nav>
      </div>
    </article>
  ),
};

export const NestedMedia: Story = {
  render: () => (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img
            src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
            alt="Profile"
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>Barbara Middleton</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta
            eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque
            mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
            <br />
            <small>
              <a>Like</a> · <a>Reply</a> · 3 hrs
            </small>
          </p>
        </div>
        <article className="media">
          <figure className="media-left">
            <p className="image is-48x48">
              <img
                src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
                alt="Profile"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Sean Brown</strong>
                <br />
                Donec sollicitudin urna eget eros malesuada sagittis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla
                sagittis, a lobortis leo feugiat.
                <br />
                <small>
                  <a>Like</a> · <a>Reply</a> · 2 hrs
                </small>
              </p>
            </div>
          </div>
        </article>
      </div>
    </article>
  ),
};
