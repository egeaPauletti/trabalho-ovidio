import { forwardRef } from "react"
import type { InputHTMLAttributes, ReactNode } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  icon?: ReactNode
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { text, type = "text", icon, error, placeholder, id, name, ...rest },
  ref
) {
  const inputId = id ?? name

  return (
    <div className="flex flex-col">
      <label htmlFor={inputId} className="font-semibold text-black">{text}</label>
      <div className="w-auto flex gap-2 items-center bg-white p-2 duration-300 delay-200 rounded-md border-black/10 border">
        <div className="flex items-center text-primary/50">
          {icon}
        </div>
        <input
          id={inputId}
          ref={ref}
          type={type}
          name={name}
          className="flex-1 focus:outline-none text-black"
          placeholder={placeholder ?? text}
          {...rest}
        />
      </div >
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  )
})

export default Input