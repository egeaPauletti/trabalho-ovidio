import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "../../schemas/contactFormSchema";
import { contactFormSchema } from "../../schemas/contactFormSchema";
import Button from "../ui/Button";



// Função de formatação para o CEP
function normalizeCEP(value: string) {
  const digits = value.replace(/\D/g, "");
  const eight = digits.slice(0, 8);
  if (eight.length <= 5) return eight;
  return eight.replace(/^(\d{5})(\d{0,3})$/, "$1-$2");
}

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  // Assista ao valor do CEP para buscar o endereço
  const cep = watch("cep");

  useEffect(() => {
    const cleanCep = cep?.replace(/\D/g, "");
    if (cleanCep && cleanCep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
        .then(res => res.json())
        .then(addr => {
          if (!addr.erro) {
            setValue("street", addr.logradouro || "");
            setValue("district", addr.bairro || "");
            setValue("city", addr.localidade || "");
            setValue("state", addr.uf || "");
          }
        });
    }
  }, [cep, setValue]);

  // Formata o CEP onChange
  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = normalizeCEP(event.target.value);
    setValue("cep", formatted);
  };

  const onSubmit = async (data: ContactFormData) => {
    const id = crypto.randomUUID();
    const payload = { id, ...data };
    const resp = await fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      throw new Error(`POST /orders falhou: ${resp.status} ${resp.statusText} ${text}`); // [web:2]
    }
  }

  return (
    <form
      className="mx-auto max-w-3xl max-sm:w-screen space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-gray-700">Primeiro nome</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            {...register("firstName")}
            placeholder="Seu primeiro nome"
            required
          />
          {errors.firstName && (
            <p className="text-xs text-red-500">{String(errors.firstName.message)}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-700">Último nome</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            {...register("lastName")}
            placeholder="Seu último nome"
            required
          />
          {errors.lastName && (
            <p className="text-xs text-red-500">{String(errors.lastName.message)}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-gray-700">Email</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            type="email"
            {...register("email")}
            placeholder="voce@exemplo.com"
            required
          />
          {errors.email && (
            <p className="text-xs text-red-500">{String(errors.email.message)}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-700">Telefone</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            type="tel"
            {...register("phone")}
            placeholder="(00) 00000-0000"
            required
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{String(errors.phone.message)}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm text-gray-700">CEP</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            type="text"
            {...register("cep")}
            placeholder="00000-000"
            maxLength={9}
            inputMode="numeric"
            autoComplete="postal-code"
            required
            onChange={handleCepChange}
          />
          <p className="mt-1 text-xs text-gray-500">Formato exigido: 00000-000</p>
          {errors.cep && (
            <p className="text-xs text-red-500">{String(errors.cep.message)}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm text-gray-700">Rua</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            {...register("street")}
            placeholder="Logradouro"
            required
          />
          {errors.street && (
            <p className="text-xs text-red-500">{String(errors.street.message)}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div>
          <label className="mb-1 block text-sm text-gray-700">Número</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            {...register("number")}
            placeholder="123"
            required
          />
          {errors.number && (
            <p className="text-xs text-red-500">{String(errors.number.message)}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm text-gray-700">Bairro</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            {...register("district")}
            placeholder="Bairro"
            required
          />
          {errors.district && (
            <p className="text-xs text-red-500">{String(errors.district.message)}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-700">Cidade</label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            {...register("city")}
            placeholder="Cidade"
            required
          />
          {errors.city && (
            <p className="text-xs text-red-500">{String(errors.city.message)}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="md:col-span-1">
          <label className="mb-1 block text-sm text-gray-700">Mensagem</label>
          <textarea
            className="h-[110px] w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-400"
            {...register("message")}
            placeholder="Escreva sua mensagem"
            required
          />
          {errors.message && (
            <p className="text-xs text-red-500">{String(errors.message)}</p>
          )}
        </div>
      </div>

      <div className="pt-2">
        <Button text="Enviar" type="submit" isFilled />
      </div>
    </form>
  );
};
