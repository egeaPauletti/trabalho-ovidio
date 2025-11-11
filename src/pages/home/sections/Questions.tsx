import Accordion from "../../../components/ui/Accordion";

export default function Questions() {
  return (
    <section id="questions" className="w-screen h-dvh max-sm:h-max flex justify-center items-center max-sm:my-30">
      <div className="w-full h-max flex flex-col items-center gap-10">
        <h1 className="text-black-text text-2xl font-bold">Duvidas Frequentes</h1>
        <div className="w-full h-max flex flex-wrap gap-10 justify-center px-20 max-sm:px-5">
          <Accordion question="Lorem Ipsum is simply dummy text of industry?" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
          <Accordion question="Lorem Ipsum is simply dummy text of industry dummy text of?" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
          <Accordion question="Lorem Ipsum is simply dummy text of industry dummy text of industr?" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
          <Accordion question="Lorem Ipsum is simply dummy text of industry?" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
          <Accordion question="Lorem Ipsum is simply industry?" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
          <Accordion question="Lorem Ipsum is simply dummy text of industry industry?" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
        </div>
      </div>
    </section>
  )
}