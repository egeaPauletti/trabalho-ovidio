import type { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  text: string,
  icon?: ReactNode,
  click?: MouseEventHandler<HTMLButtonElement>
  isFilled?: boolean
  type?: "submit" | "reset" | "button"
  disabled?: boolean
}

export default function Button({ type, text, click, icon, isFilled = false, disabled = false }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={click}
      disabled={disabled}
      className={
        `
      flex justify-center items-center gap-2.5 border-primary 
      border-2 rounded-sm min-w-45 min-h-10 
      text-primary font-semibold text-sm cursor-pointer transition-all duration-300  
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${isFilled ? "bg-primary text-white hover:bg-primary/70 hover:border-0" : "hover:text-white hover:bg-primary"}`}>
      {icon}{text}
    </button>
  )
}