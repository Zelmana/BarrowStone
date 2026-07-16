import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
  justify-content: flex-start;
  width: 100%;
}

header h1 {
  margin: 0;
  flex: auto;
}

@media (max-width: 800px) {
  header {
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1rem 0 1.25rem;
    padding: 0 0.5rem;
    gap: 0.75rem;
  }

  header h1 {
    width: 100%;
  }
}
`

export default (() => Header) satisfies QuartzComponentConstructor
