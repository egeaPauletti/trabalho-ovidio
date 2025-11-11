import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(1, { message: "Senha obrigatória" }).min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;