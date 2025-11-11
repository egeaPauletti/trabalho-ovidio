import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CardInfomartion from "../../../components/Cards/CardInfomation";
import { ContactForm } from "../../../components/Forms/ContactForm";


export default function Contact() {

  return (
    <section className="w-full h-dvh flex max-sm:flex-col max-sm:h-max justify-center items-center bg-white gap-15 py-10 mt-20">
      <div className=" w-max h-max max-sm:w-screen flex flex-col gap-5 justify-center items-center">
        <h2 className="font-bold text-3xl max-sm:text-center">Entre em <span className="text-primary">Contato</span> Conosco</h2>
        <p className="max-sm:w-screen text-texts max-w-150 text-center max-sm:px-7">Transformamos ideias em soluções digitais sólidas, eficientes e escaláveis. Atuamos em todas as etapas do ciclo de vida do software — da concepção à manutenção — para garantir que sua empresa obtenha o máximo valor da tecnologia.</p>
        <div className="flex max-sm:flex-col w-full gap-10">
          <CardInfomartion icon={<FaPhoneAlt />} title="Telefone" text={"(00) 00000-0000"} />
          <CardInfomartion icon={<MdEmail />} title="Email" text="emailteste@gmail.com" />
        </div>
      </div>
      <div className="w-max h-max flex gap-20">
        <ContactForm />
      </div>
    </section>
  )
}