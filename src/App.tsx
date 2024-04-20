import { TableOfContents } from '../dist'
import { HeroSection } from '../dist/HeroSection'

function App() {
  return (
    <>
      <HeroSection>
        <h1 className="title">Large section</h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like
          the one you're currently reading.
        </h2>
      </HeroSection>
      <TableOfContents projectSlug="home" pageLength={2} />
    </>
  )
}

export default App
