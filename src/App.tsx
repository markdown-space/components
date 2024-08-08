import { Box } from "./components/Box";
import { Button } from "./components/Button";
import { HeroSection } from "./components/HeroSection";
import { Modal } from "./components/Modal";
import { Notifications } from "./components/Notification";
import { Pagination } from "./components/Pagination";
import { TableOfContents } from "./components/TableOfContents";

export default function App() {
  return (
    <>
      <hr />
      <HeroSection>
        <h1 className="title">Large section</h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </h2>
      </HeroSection>
      <hr />
      <TableOfContents projectSlug="home" pageLength={2} />
      <hr />
      <Box />
      <hr />
      <Button />
      <hr />
      <Modal />
      <hr />
      <Notifications />
      <hr />
      <Pagination />
      <hr />
    </>
  );
}
