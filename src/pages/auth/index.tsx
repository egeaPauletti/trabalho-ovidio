
import { useState } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import BackgroundImage from "../../components/ui/BackgroundImage";
import RegisterForm from "../../components/Forms/RegisterForm";
import BackButton from "../../components/ui/BackButton";

export default function AuthScreen() {

  const [isRegister, setIsRegister] = useState(false);

  const handleRegister = () => {
    setIsRegister(!isRegister);
  }
  
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-10">
      <BackgroundImage />
      
      <div className="absolute inset-0 -z-10 bg-black/60" />
      <BackButton />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-12 lg:flex-row lg:items-stretch">

        <figure className="flex max-w-xl flex-1 flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <h1 className="text-3xl font-bold lg:text-4xl">Área do Admin</h1>
          <p className="text-sm leading-relaxed sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga maxime optio aperiam omnis debitis quibusdam similique tenetur, ab distinctio numquam dolore modi expedita doloribus facere deserunt provident magni magnam dolorem.
          </p>
        </figure>
        <div className="w-full max-w-md">
          {isRegister ? <RegisterForm onRegister={handleRegister} /> : <LoginForm onLogin={handleRegister} />}
        </div>
      </div>
    </section>
  )
}
