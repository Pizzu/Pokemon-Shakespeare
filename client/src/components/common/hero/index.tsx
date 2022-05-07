import type { ReactNode } from "react"

type HeroProps = {
  children: ReactNode
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div className="text-center">
      {children}
    </div>
  )
}

export default Hero