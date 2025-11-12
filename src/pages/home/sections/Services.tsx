import { GrSystem } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import CardServices from "../../../components/Cards/CardServices";


export default function Services() {
  return (
    <section className="w-full h-max max-sm:w-screen max-sm:h-max flex flex-col gap-20 justify-center items-center py-10">
      <div className="w-full h-max flex flex-col gap-5 justify-center items-center">
        <h2 className="font-bold text-3xl max-sm:text-center">Nossos <span className="text-primary">Serviços</span> de Consultoria em Software</h2>
        <p className="text-texts w-screen xl:max-w-200 text-center max-xl:px-7 xl:px-10">Transformamos ideias em soluções digitais sólidas, eficientes e escaláveis. Atuamos em todas as etapas do ciclo de vida do software — da concepção à manutenção — para garantir que sua empresa obtenha o máximo valor da tecnologia.</p>
      </div>
      <div className="flex flex-wrap gap-20 max-sm:flex-col justify-center">
        <CardServices number="01" icon={<RiPagesLine />} title="Criamos sua pagina!" text="Transforme seu negócio em uma presença digital de sucesso, com um site que reflete a essência da sua marca, atrai clientes e gera resultados reais. Dê o próximo passo rumo ao crescimento: leve sua ideia para o mundo online e destaque-se da concorrência" />
        <CardServices number="02" icon={<GrSystem />} title="Sistemas Completos" text="Desenvolvemos sistemas completos capazes de atender a qualquer tipo de necessidade,Cada solução é pensada para integrar processos, otimizar tarefas e proporcionar uma experiência fluida, tanto para empresas quanto para clientes." />
        <CardServices number="03" icon={<IoRocketOutline />} title="Impulsionamos seu Software" text="Impulsionamos seu software aprimorando tudo o que ele já oferece, potencializando suas funcionalidades e garantindo que cada recurso seja utilizado da melhor forma possível. Nosso objetivo é tornar seu software mais eficiente, responsivo e capaz de gerar resultados reais para o seu negócio" />
      </div>
    </section>
  )
}