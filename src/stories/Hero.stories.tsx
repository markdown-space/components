import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Hero } from "../components/Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHero: Story = {
  render: () => <Hero />,
};

const colors = [
  "",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
  "dark",
] as const;

type ColorType = (typeof colors)[number];

const createHeroStory = (color: ColorType): Story => ({
  render: () => (
    <div className={`hero ${color ? `is-${color}` : ""}`}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Title</h1>
          <h2 className="subtitle">Subtitle</h2>
        </div>
      </div>
    </div>
  ),
});

export const DefaultColorHero = createHeroStory("");
export const PrimaryHero = createHeroStory("primary");
export const LinkHero = createHeroStory("link");
export const InfoHero = createHeroStory("info");
export const SuccessHero = createHeroStory("success");
export const WarningHero = createHeroStory("warning");
export const DangerHero = createHeroStory("danger");
export const DarkHero = createHeroStory("dark");

export const HeroWithNavbar: Story = {
  render: () => (
    <div>
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/markdown-space-logo.svg" alt="Logo" />
            </a>
            <span className="navbar-burger burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">Home</a>
              <a className="navbar-item">Examples</a>
              <a className="navbar-item">Documentation</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Title</h1>
            <h2 className="subtitle">Subtitle</h2>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const HeroWithTabs: Story = {
  render: () => (
    <div className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Title</h1>
          <h2 className="subtitle">Subtitle</h2>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  ),
};
