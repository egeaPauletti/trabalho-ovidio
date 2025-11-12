import { CgProfile } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";

import aboutPanel2 from "@/assets/panels/panelAbout1.jpeg";
import aboutPanel1 from "@/assets/panels/panelAbout2.jpg";

export default function About() {
  return (
    <section id="about" className="w-full h-dvh max-sm:h-max flex sm:flex-col xl:flex-row justify-center items-center bg-white gap-20 max-sm:py-20 max-sm:mb-20">
      <div className="flex flex-col w-max h-max gap-5">
        <div className=" justify-between hidden xl:flex">
          <div className="flex justify-start items-end p-5 border border-black/5 bg-white size-50 rounded-lg shadow-lg font-semibold"><h2>Sobre Nós</h2></div>
          <img className="size-50 rounded-lg " src={aboutPanel1} alt="" />
        </div>
        <div className="w-full hidden xl:flex">
          <img className="flex-1 w-110 h-50 rounded-lg" src={aboutPanel2} alt="" />
        </div>
      </div>
      <div className="flex w-max flex-col gap-10 max-sm:w-screen">
        <div className="w-max h-max max-lg:w-screen flex flex-col gap-10 max-lg:text-sm">
          <h2 className="font-bold text-3xl max-w-150 max-sm:w-80">Profissionalize sua empresa com uma <span className="text-primary">página dedicada.</span></h2>
          <p className="max-w-150 text-justify max-sm:w-80">A RadTech é uma empresa brasileira de desenvolvimento de software fundada em 2018 em Belo Horizonte. Começamos como um time pequeno de três desenvolvedores com uma ideia simples: transformar processos complexos em produtos digitais intuitivos e de alto impacto. Desde então, crescemos para uma equipe multidisciplinar de 45 pessoas — designers, engenheiros de software, product managers e especialistas em dados — e já entregamos mais de 120 soluções para clientes de setores como saúde, educação, logística e fintechs.</p>
        </div>
        <div className="w-full flex gap-20 max-sm:flex-col items-center max-sm:items-start px-2.5">
          <figure className="flex w-max items-center gap-2.5">
            <span className="text-xl text-white bg-primary p-2 rounded-sm border-primary border-2">
              <FaProjectDiagram />
            </span>
            <span>+300 projetos entregues</span>
          </figure>
          <figure className="flex w-max items-center gap-2.5">
            <span className="text-xl text-primary border-2 p-2 rounded-sm border-primary">
              <CgProfile />
            </span>
            <span>250 clientes satisfeitos</span>
          </figure>
        </div>
      </div>
    </section>
  )
}