import panel1 from "@/assets/panels/panel-1.png";
import panel2 from "@/assets/panels/panel-2.png";
import panel3 from "@/assets/panels/panel-3.png";
import Button from "../../../components/ui/Button";

export default function Initial() {
  return (
    <section className="w-[90%] max-sm:w-full h-dvh mt-10 flex justify-around items-center text-center gap-15 relative z-90 overflow-hidden fadeInAnimation">
      <div className="w-max h-max flex flex-col gap-10">
        <div className="w-max h-max max-sm:w-full flex flex-col justify-center items-start max-sm:items-center text-start max-sm:text-center gap-7 max-sm:gap-5">
          <h1 className="font-bold text-4xl max-sm:text-2xl">Evolua seu <span className="text-primary">Negócio</span> com uma<br /> presença digital poderosa.</h1>
          <p className="text-texts max-w-150 max-sm:w-90 max-sm:text-sm">Construímos páginas que comunicam confiança, destacam seu diferencial e impulsionam resultados reais. Feita para valorizar sua marca e atrair novos clientes todos os dias.</p>
        </div>
        <div className="flex gap-10 max-sm:gap-5 max-sm:w-screen max-sm:justify-center ">
          <Button text="Contate-nos" isFilled />
          <Button text="Nossos Serviços" />
        </div>
      </div>
      <div className="flex flex-col z-50">
        <img className="w-90 h-50 max-sm:w-80 max-sm:h-40 rounded-xl rotate-7 relative top-7 z-50" src={panel3} alt="" />
        <img className="w-90 h-50 max-sm:w-80 max-sm:h-40 rounded-xl -rotate-6 z-51" src={panel2} alt="" />
        <img className="w-90 h-50 max-sm:w-80 max-sm:h-40 rounded-xl rotate-5 relative bottom-7 z-50" src={panel1} alt="" />
      </div>
    </section>
  )
}