import { Dropdown } from "./components/Dropdown";
import { Form } from "./components/Form";
import { Hero } from "./components/Hero";
import { Image } from "./components/Image";
import { Level } from "./components/Level";
import { Media } from "./components/Media";
import { Menu } from "./components/Menu";
import { Message } from "./components/Message";
import { Panel } from "./components/Panel";
import { Progress } from "./components/Progress";
import { Table } from "./components/Table";
import { Typography } from "./components/Typography";
import {
  Box,
  Breadcrumb,
  Button,
  Card,
  HeroSection,
  Modal,
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
      <Form />
      <hr />
      <Hero />
      <hr />
      <Image />
      <hr />
      <Level />
      <hr />
      <Media />
      <hr />
      <Menu />
      <hr />
      <Message />
      <hr />
      <Panel />
      <hr />
      <Progress />
      <hr />
      <Table />
      <hr />
      <Typography />
      <hr />
      <Dropdown />
      <hr />
    </>
  );
}
