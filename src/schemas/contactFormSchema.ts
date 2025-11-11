import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "Primeiro nome obrigatório"),
  lastName: z.string().min(1, "Último nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(8, "Telefone obrigatório"),
  cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP deve ser no formato 00000-000"),
  street: z.string().min(1, "Rua obrigatória"),
  number: z.string().min(1, "Número obrigatório"),
  district: z.string().min(1, "Bairro obrigatório"),
  city: z.string().min(1, "Cidade obrigatória"),
  state: z.string().min(1, "Estado obrigatório"),
  message: z.string().min(1, "Mensagem obrigatória")
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
