import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Navbar } from "../components/Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNavbar: Story = {
  render: () => <Navbar />,
};

const colors = [
  "",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
  "white",
  "black",
  "light",
  "dark",
] as const;

type ColorType = (typeof colors)[number];

const createNavbarStory = (color: ColorType): Story => ({
  render: () => (
    <nav className={`navbar ${color ? `is-${color}` : ""}`}>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="/markdown-space-logo.svg" alt="Logo" height="28" />
        </a>
        <div className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">Documentation</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">Sign up</a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ),
});

export const DefaultColorNavbar = createNavbarStory("");
export const PrimaryNavbar = createNavbarStory("primary");
export const LinkNavbar = createNavbarStory("link");
export const InfoNavbar = createNavbarStory("info");
export const SuccessNavbar = createNavbarStory("success");
export const WarningNavbar = createNavbarStory("warning");
export const DangerNavbar = createNavbarStory("danger");
export const WhiteNavbar = createNavbarStory("white");
export const BlackNavbar = createNavbarStory("black");
export const LightNavbar = createNavbarStory("light");
export const DarkNavbar = createNavbarStory("dark");

export const TransparentNavbar: Story = {
  render: () => (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="/markdown-space-logo.svg"
            alt="Logo"
            width="112"
            height="28"
          />
        </a>
        <div className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Docs</a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item">Overview</a>
              <a className="navbar-item">Elements</a>
              <a className="navbar-item">Components</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ),
};
