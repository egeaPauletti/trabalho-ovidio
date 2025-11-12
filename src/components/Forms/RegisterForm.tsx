import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { registerFormSchema, type RegisterFormData } from "../../schemas/registerFormSchema";
import { useState } from "react";

export default function RegisterForm({ onRegister }: { onRegister: () => void }) {
  const navigate = useNavigate();
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await delay(1500);
      const { confirmPassword, ...payload } = data;
      void confirmPassword;
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`POST /users falhou: ${response.status} ${response.statusText} ${text}`);
      }

      toast.success("Usuário criado com sucesso");
      navigate("/auth");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao criar usuário");
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
          <Input text="Nome" type="text" icon={<MdPerson size={20} />} {...register("name")} error={errors.name?.message} />
          <Input text="Email" type="email" icon={<MdEmail size={20} />} {...register("email")} error={errors.email?.message} />

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

          <Input
            text="Confirmar Senha"
            type={isPasswordVisible ? "text" : "password"}
            icon={
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className={`rounded-full p-1 transition-colors focus:outline-none ${isPasswordVisible ? "text-primary" : "text-primary/70"}`}
                aria-pressed={isPasswordVisible}
                aria-label={isPasswordVisible ? "Ocultar confirmação de senha" : "Mostrar confirmação de senha"}
              >
                <MdLock size={20} />
              </button>
            }
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
        </div>
        <Button text={isSubmitting ? "Cadastrando..." : "Cadastrar"} disabled={isSubmitting} />
        <a
          href="#"
          className="text-sm text-gray-500 underline hover:text-primary"
          onClick={(event) => {
            event.preventDefault();
            onRegister();
          }}
        >
          Já tenho uma conta
        </a>
      </form>
    </div>
  )
}