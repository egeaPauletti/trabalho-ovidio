import { GrSystem } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import CardServices from "../../../components/Cards/CardServices";


export default function Services() {
  return (
    <section className="w-full h-dvh max-sm:w-screen max-sm:h-max flex flex-col gap-20 justify-center items-center">
      <div className="w-full h-max flex flex-col gap-5 justify-center items-center">
        <h2 className="font-bold text-3xl max-sm:text-center">Nossos <span className="text-primary">Serviços</span> de Consultoria em Software</h2>
        <p className="text-texts max-w-200 text-center max-sm:px-7">Transformamos ideias em soluções digitais sólidas, eficientes e escaláveis. Atuamos em todas as etapas do ciclo de vida do software — da concepção à manutenção — para garantir que sua empresa obtenha o máximo valor da tecnologia.</p>
      </div>
      <div className="flex gap-20 max-sm:flex-col">
        <CardServices number="01" icon={<RiPagesLine />} title="Criamos sua pagina!" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit" />
        <CardServices number="02" icon={<GrSystem />} title="Sistemas Completos" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit" />
        <CardServices number="03" icon={<IoRocketOutline />} title="Impulsionamos seu Software" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit" />
      </div>
    </section>
  )
}