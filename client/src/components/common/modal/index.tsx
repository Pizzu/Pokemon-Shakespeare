import type { ReactNode } from "react"

type ModalProps = {
  isOpen: boolean,
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  return (
    <div className={`${!isOpen ? "hidden" : ""} fixed z-10 inset-0 overflow-y-auto"`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4">
        <span className="hidden" aria-hidden="true">&#8203;</span>
        {children}
      </div>
    </div>
  )
}

export default Modal