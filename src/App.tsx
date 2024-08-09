import {
  Buttons,
  HeroSection,
  Modal,
  Notifications,
  TableOfContents,
} from "../lib";
import { Box } from "../lib/Box";
import { Pagination } from "../lib/Pagination";

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
      <Buttons />
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
