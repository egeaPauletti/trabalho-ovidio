import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { loginFormSchema, type LoginFormData } from "../../schemas/loginFormSchema";
import type { UserSchema } from "../../schemas/userSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function LoginForm({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await delay(1500);
      const response = await fetch("http://localhost:4000/users", {
        method: "GET",
      });

      const users = await response.json();
      const user: UserSchema = users.find((user: UserSchema) => user.email === data.email);

      if (!user) {
        toast.error("Usuário não encontrado");
        throw new Error("Usuário não encontrado");
      }

      if (user.password !== data.password) {
        toast.error("Senha incorreta");
        throw new Error("Senha incorreta");
      }

      sessionStorage.setItem("user_id", user.id.toString());
      sessionStorage.setItem("user_name", user.name);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("user-session-change"));
      }
      toast.success("Login realizado com sucesso");
      navigate("/dashboard");

    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };


  return (
    <div className="bg-white max-sm:bg-transparent p-5 md:p-10 rounded-xl md:shadow-lg m-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col gap-5 justify-center items-center"
        noValidate
      >

        <h1 className="text-primary font-bold text-3xl">Acesse o Painel Admin</h1>
        <div className="w-full flex flex-col gap-5">
          <Input
            text="Email"
            type="email"
            icon={<MdEmail size={20} />}
            {...register("email")}
            error={errors.email?.message}
          />

          <Input
            text="Senha"
            type={isPasswordVisible ? "text" : "password"}
            icon={
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className={`rounded-full p-1 transition-colors focus:outline-none ${isPasswordVisible ? "text-primary" : "text-primary/70"}`}
                aria-pressed={isPasswordVisible}
                aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
              >
                <MdLock size={20} />
              </button>
            }
            error={errors.password?.message}
            {...register("password")}
          />
        </div>
        <Button text={isSubmitting ? "Entrando..." : "Entrar"} disabled={isSubmitting} />
        <a
          href="#"
          className="text-sm text-gray-500 underline hover:text-primary"
          onClick={(event) => {
            event.preventDefault();
            onLogin();
          }}
        >
          Não tenho uma conta
        </a>
      </form>
    </div>
  )
}