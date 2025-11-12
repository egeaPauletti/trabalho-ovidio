import { useEffect, useMemo, useState } from "react";
import { FaCity, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdMessage } from "react-icons/md";
import { SiCeph } from "react-icons/si";
import { TbBuildingEstate } from "react-icons/tb";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import type { ContactFormData } from "../../schemas/contactFormSchema";

export default function DashboardScreen() {
  const [dataUsers, setDataUsers] = useState<ContactFormData[]>([]);

  async function getUsers() {
    const response = await fetch("http://localhost:4000/orders", { method: "GET" });
    if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);
    return (await response.json()) as ContactFormData[];
  }

  useEffect(() => {
    (async () => {
      try {
        const fetched = await getUsers();
        setDataUsers(fetched ?? []);
      } catch (e) {
        console.error(e);
        setDataUsers([]);
      }
    })();
  }, []);

  // Leia o email da sessão
  const sessionEmailRaw = sessionStorage.getItem("user_email"); // ajuste a chave se for "user_name" ou similar
  const sessionEmail = sessionEmailRaw?.trim().toLowerCase() || "";

  // Derive a lista a renderizar
  const usersToRender = useMemo(() => {
    if (sessionEmail === "admin@admin.com") return dataUsers;
    return dataUsers.filter(u => (u.email?.trim().toLowerCase() || "") === sessionEmail);
  }, [dataUsers, sessionEmail]);

  return (
    <>
      <div className="w-screen h-max flex flex-col items-center">
        <header className="w-[90%] flex justify-between items-center glasseffect p-4 mt-10">
          <figure className="flex justify-center font-bold text-3xl gap-10">
            <Link to={"/"}>
              <h1 className="text-primary">RadTech</h1>
            </Link>
          </figure>
          <Link to={"/"}>
            <Button text="Voltar para Home" isFilled />
          </Link>
        </header>

        <main className="w-screen flex flex-col gap-20 justify-center items-center my-10">
          <h1 className="text-3xl">Todos os Contatos</h1>

          <div className="w-screen h-max flex justify-center">
            <div className="w-[90%] flex gap-20 justify-start overflow-x-auto pb-2.5">
              {usersToRender.map((user, index) => (
                <div key={index}>
                  <div className="bg-white shadow-lg w-88 h-94 rounded-lg">
                    <div className="flex p-2 gap-1">
                      <span className="bg-red-500 inline-block center w-3 h-3 rounded-full" />
                      <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full" />
                      <span className="bg-green-500 inline-block center w-3 h-3 rounded-full" />
                    </div>

                    <div className="flex flex-col gap-2.5 px-5 pt-5">
                      <span className="flex justify-between">
                        <span className="text-lg font-semibold">
                          {user.firstName} {user.lastName}
                        </span>
                        <span className="flex items-center gap-2.5 pr-5">
                          <FaPhoneAlt /> {user.phone}
                        </span>
                      </span>

                      <span className="flex items-center gap-2.5">
                        <MdEmail /> {user.email}
                      </span>

                      <span className="flex justify-between">
                        <span className="flex items-center gap-2.5">
                          <SiCeph /> {user.cep}
                        </span>
                        <span className="flex items-center gap-2.5">
                          <FaCity /> {user.city}
                        </span>
                        <span className="flex items-center gap-2.5">
                          <TbBuildingEstate /> {user.state}
                        </span>
                      </span>

                      <span className="flex justify-between">
                        <span className="flex items-center gap-2.5">
                          <MdLocationPin /> {user.district}
                        </span>
                      </span>

                      <span className="flex items-start gap-2.5 mt-5">
                        <span className="text-xl">
                          <MdMessage />
                        </span>
                        {user.message}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {usersToRender.length === 0 && (
                <div className="text-sm text-gray-500 px-4 py-2">
                  Nenhum contato para o usuário atual.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
