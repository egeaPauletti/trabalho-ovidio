import type { ReactNode } from "react";

interface CardServicesProps {
  title: string;
  text: string;
  number: string;
  icon: ReactNode
}

export default function CardServices({ title, text, icon, number }: CardServicesProps) {
  return (
    <div
      className="w-90 h-84 bg-white shadow-lg p-9 space-y-3 relative overflow-hidden">
      <div className="w-24 h-24 bg-primary rounded-full absolute -right-5 -top-7">
        <p className="absolute bottom-6 left-7 text-white text-2xl">{number}</p>
      </div>
      <div className="text-primary text-3xl pb-2.5">
        {icon}
      </div>
      <h1 className="font-semibold text-xl text-primary">{title}</h1>
      <p className="text-sm text-texts text-start">
        {text}
      </p>
    </div>
  )
}