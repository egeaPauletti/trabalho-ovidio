import { useEffect, useState } from "react";
import { FaCity, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdMessage } from "react-icons/md";
import { SiCeph } from "react-icons/si";
import { TbBuildingEstate } from "react-icons/tb";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import type { ContactFormData } from "../../schemas/contactFormSchema";

export default function DashboardScreen() {

  const [dataUsers, setDataUsers] = useState<ContactFormData[]>([]);
  // const [click, setClick] = useState(false)

  async function getUsers() {
    try {
      const response = await fetch('http://localhost:4000/orders', {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      return null;
    }
  }

  useEffect(() => {
    async function loadUsers() {
      const fetched = await getUsers()
      setDataUsers(fetched)
    }
    loadUsers()
  }, [])

  const DataUsers = getUsers()
  console.log(DataUsers)


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
          <h1 className="text-3xl">Contatos feitos por clientes</h1>
          <div className="w-screen h-max flex justify-center">
            <div className="w-full flex flex-wrap gap-20 justify-center">
              {
                dataUsers.map((user, index) => (
                  <div key={index}>
                    <div className="bg-white shadow-lg w-88 h-94 rounded-lg">
                      <div className="flex p-2 gap-1">
                        <div className="">
                          <span className="bg-red-500 inline-block center 
                            w-3 h-3 rounded-full"></span>
                        </div>
                        <div className="circle">
                          <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                        <div className="circle">
                          <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5 px-5 pt-5">
                        <span className="flex justify-between">
                          <span className="text-lg font-semibold">
                            {user.firstName} {user.lastName}</span>
                          <span className="flex items-center gap-2.5 pr-5"><FaPhoneAlt /> {user.phone}</span>
                        </span>
                        <span className="flex items-center gap-2.5"><MdEmail /> {user.email}</span>

                        <span className="flex justify-between">
                          <span className="flex items-center gap-2.5"><SiCeph /> {user.cep}</span>
                          <span className="flex items-center gap-2.5"><FaCity /> {user.city}</span>
                          <span className="flex items-center gap-2.5"><TbBuildingEstate /> {user.state}</span>
                        </span>
                        <span className="flex justify-between">
                          <span className="flex items-center gap-2.5"><MdLocationPin /> {user.district}</span>
                        </span>
                        <span className="flex items-start gap-2.5 mt-5"><span className="text-xl"><MdMessage /></span> {user.message}</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

