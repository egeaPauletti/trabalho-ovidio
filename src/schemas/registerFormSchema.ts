import z from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, { message: "Nome obrigatório" }),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
  confirmPassword: z.string().min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;