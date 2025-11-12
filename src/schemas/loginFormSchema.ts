import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(1, { message: "Senha obrigatória" }),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;