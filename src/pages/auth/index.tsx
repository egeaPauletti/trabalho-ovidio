import { MdArrowBack, MdEmail, MdLock } from "react-icons/md";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import { Link } from "react-router-dom";
import background from "../../assets/peakpx.jpg";

export default function AuthScreen() {
  return (
    <div className="w-dvw h-dvh flex bg-contain max-sm:overflow-hidden" style={{ backgroundImage: `url(${background})` }} >
      <div className="absolute top-10 left-10 max-sm:top-5 max-sm:left-5">
        <Link to={"/"}>
          <Button text="Voltar" icon={<MdArrowBack />} isFilled />
        </Link>
      </div>
      <div className="w-full h-full flex max-sm:flex-col items-center justify-center bg-white/60"
      >
        <figure className="flex flex-col flex-1 items-center justify-center gap-10 max-sm:hidden">
          <h1 className="text-2xl font-bold w-150 max-sm:text-center">Area do Admin</h1>
          <p className="w-150 text-justify max-sm:w-screen max-sm:px-10 max-sm:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga maxime optio aperiam omnis debitis quibusdam similique tenetur, ab distinctio numquam dolore modi expedita doloribus facere deserunt provident magni magnam dolorem.</p>
        </figure>
        <div className="bg-white max-sm:bg-transparent w-1/3 h-5/6 m-10 max-sm:w-screen rounded-2xl md:shadow-lg">
          <form action="" className="w-full h-full flex flex-col gap-10 justify-center items-center">
            <h1 className="text-primary font-bold text-3xl">Acesse o Painel Admin</h1>
            <div className="flex flex-col gap-5">
              <Input text="Email" type="email" icon={<MdEmail />} />
              <Input text="Senha" type="password" icon={<MdLock />} />
            </div>
            <Button text="Entrar" />
          </form>
        </div>
      </div>
    </div >
  )
}
