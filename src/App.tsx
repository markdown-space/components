import {
  Box,
  Breadcrumb,
  Button,
  Card,
  HeroSection,
  Modal,
  Notifications,
  Pagination,
  Tab,
  TableOfContents,
  Tag,
} from "./index";

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
      <Tab />
      <hr />
      <Breadcrumb />
      <hr />
      <Card />
      <hr />
      <Tag />
      <hr />
    </>
  );
}
