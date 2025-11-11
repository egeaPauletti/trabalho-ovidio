import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { loginFormSchema, type LoginFormData } from "../../schemas/loginFormSchema";
import type { UserSchema } from "../../schemas/userSchema";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "GET",
      });

      const users = await response.json();

      const user = users.find((user: UserSchema) => user.email === data.email);
      
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      sessionStorage.setItem("user_id", user.id.toString());

      navigate("/dashboard");

    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };


  return (
    <div className="bg-white max-sm:bg-transparent w-1/3 h-5/6 m-10 max-sm:w-screen rounded-2xl md:shadow-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col gap-10 justify-center items-center"
        noValidate
      >

        <h1 className="text-primary font-bold text-3xl">Acesse o Painel Admin</h1>
        <div className="flex flex-col gap-5">

          <Input text="Email" type="email" icon={<MdEmail />} {...register("email")} error={errors.email?.message} />

          <Input text="Senha" type="password" icon={<MdLock />} {...register("password")} error={errors.password?.message} />
        </div>
        <Button text="Entrar" />
      </form>
    </div>
  )
}