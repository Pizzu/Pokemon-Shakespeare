import type { ReactNode } from "react"

type SectionLayoutProps = {
  children: ReactNode
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default SectionLayout