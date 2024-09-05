import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Card } from "../components/Card";

const meta = {
  title: "Bulma Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Card story
export const DefaultCard: Story = {
  render: () => <Card />,
};

// Image Card
export const ImageCard: Story = {
  render: () => (
    <div className="card" style={{ width: "300px" }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://images.pexels.com/photos/2528352/pexels-photo-2528352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Beach sunset"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image" style={{ height: "40px", width: "40px" }}>
              <img
                src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
                alt="Profile"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
        <div className="content">
          Enjoying my evening at the beach. Look at that amazing view! What a
          beautiful sunset! <a>@markdown.space</a> <a>#beach</a> <a>#sunset</a>
          <br />
          <small>11:09 PM - 10 July 2024</small>
        </div>
      </div>
    </div>
  ),
};

// Card with Header and Footer
export const CardWithHeaderFooter: Story = {
  render: () => (
    <div className="card" style={{ width: "300px" }}>
      <header className="card-header">
        <p className="card-header-title">Component</p>
        <a className="card-header-icon">
          <span className="icon">
            <i className="fa fa-angle-down"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          Enjoying my evening at the beach. Look at that amazing view! What a
          beautiful sunset! <a>@markdown.space</a> <a>#beach</a> <a>#sunset</a>
          <br />
          <small>11:09 PM - 10 July 2024</small>
        </div>
      </div>
      <footer className="card-footer">
        <a className="card-footer-item">Save</a>
        <a className="card-footer-item">Edit</a>
        <a className="card-footer-item">Delete</a>
      </footer>
    </div>
  ),
};

// Simple Content Card
export const SimpleContentCard: Story = {
  render: () => (
    <div className="card" style={{ width: "300px" }}>
      <div className="card-content">
        <p className="title">
          "There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors."
        </p>
        <p className="subtitle">Jeff Atwood</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            View on{" "}
            <a href="https://twitter.com/codinghorror/status/506010907021828096">
              Twitter
            </a>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            Share on <a href="#">Facebook</a>
          </span>
        </p>
      </footer>
    </div>
  ),
};

// Card with No Image
export const CardWithNoImage: Story = {
  render: () => (
    <div className="card" style={{ width: "300px" }}>
      <div className="card-content">
        <p className="title">
          "Science is not only compatible with spirituality; it is a profound
          source of spirituality."
        </p>
        <p className="subtitle">Carl Sagan</p>
      </div>
    </div>
  ),
};
