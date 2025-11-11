import type { ReactNode } from "react"

interface InputProps {
  text: string
  type: string
  icon?: ReactNode
}

export default function Input({ text, type, icon }: InputProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor="" className="font-semibold text-black">{text}</label>
      <div
        className="w-100 flex gap-2 items-center bg-white p-2 duration-300 delay-200 rounded-md border-black/10 border">
        <figure className="text-primary/50">
          {icon}
        </figure>
        <input
          type={type}
          name="text"
          className="flex-1 focus:outline-none text-black"
          placeholder={text}
        />
      </div >
    </div>
  )
}