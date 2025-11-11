import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function DashboardScreen() {
  return (
    <>
      <div className="w-screen h-max flex flex-col items-center">
        <header className="w-[90%] flex justify-between items-center glasseffect p-4 mt-10">
          <figure className="flex justify-center font-bold text-3xl gap-10">
            <h1 className="text-primary">RadTech</h1>
          </figure>
          <Link to={"/"}>
            <Button text="Voltar para Home" isFilled />
          </Link>
        </header>
        <main>
        </main>
      </div>
    </>
  )
}

