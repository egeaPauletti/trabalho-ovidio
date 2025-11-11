import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

type AccordionProps = {
  question: string
  answer: string
  defaultOpen?: boolean
  children?: React.ReactNode
}

export default function Accordion({ question, answer, defaultOpen = false, children, }: AccordionProps) {
  const [open, setOpen] = useState<boolean>(defaultOpen)

  return (
    <div className="rounded-sm border hover:border-black w-150 h-max transition-all duration-500">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 bg-transparent text-left focus:outline-none cursor-pointer"
      >
        <span className="text-base text-gray-text hover:text-black">{question}</span>
        <span
          aria-hidden
          className={`inline-flex items-center justify-center w-7 h-7 transform transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
        >
          <IoIosArrowDown />
        </span>
      </button>

      <div
        role="region"
        aria-hidden={!open}
        className={`overflow-hidden transition-all rounded-b-sm  ${open ? 'max-h-96 duration-500 border-t' : 'max-h-0 duration-100'}`}
      >
        <div className={`px-4 ${open ? 'py-3' : 'py-0'} text-black`}>
          {children ?? (
            <p className="text-sm text-gray-text text-justify">{answer}</p>
          )}
        </div>
      </div>
    </div>
  )
}