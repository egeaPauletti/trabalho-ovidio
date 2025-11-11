import type { ReactNode } from "react";

interface CardInfomationProps {
  icon: ReactNode,
  title: string,
  text: string,
}
export default function CardInfomartion({ icon, title, text }: CardInfomationProps) {
  return (
    <figure className="flex items-center border border-black/20 p-2.5 flex-1 rounded-lg gap-5 max-sm:mx-10">
      <div className="text-xl bg-primary w-max h-max p-2.5 rounded-lg text-white">{icon}</div>
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </figure>
  )
}