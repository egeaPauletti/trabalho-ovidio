import authBackground from "@/assets/peakpx.jpg";


export default function BackgroundImage() {
  return (
    <img
        src={authBackground}
        alt="Painel administrativo"
        className="absolute h-full w-full object-cover"
      />
  )
}