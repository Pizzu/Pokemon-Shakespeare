import type { MouseEventHandler, ReactNode } from "react"

type ButtonProps = {
  className: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  isDisabled?: boolean,
  type?: "button" | "submit" | "reset",
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ className, onClick, isDisabled, type, children }) => {
  return (
    <button type={type} onClick={onClick} disabled={isDisabled} className={`nav-link rounded-lg px-6 py-3 ${className}`}>
      {children}
    </button>
  )
}

export default Button