import Accordion from "../../../components/ui/Accordion";

export default function Questions() {
  return (
    <section id="questions" className="w-screen h-dvh max-sm:h-max flex justify-center items-center max-sm:my-30">
      <div className="w-full h-max flex flex-col items-center gap-10">
        <h1 className="text-black-text text-2xl font-bold">Duvidas Frequentes</h1>
        <div className="w-full h-max flex flex-wrap gap-10 justify-center px-20 max-sm:px-5">
          <Accordion question="Quanto custa para criar um site?" answer="O valor depende do tipo e complexidade do projeto — sites institucionais, lojas virtuais ou portfólios, por exemplo, têm diferentes níveis de personalização. Após entender suas necessidades, enviamos um orçamento sob medida." />

          <Accordion question="Em quanto tempo meu site ficará pronto?" answer="O prazo médio varia de 7 a 30 dias, dependendo das funcionalidades desejadas e da rapidez na aprovação do conteúdo (textos, imagens, etc.)." />

          <Accordion question="Vocês cuidam da hospedagem e do domínio também?" answer="Sim. Podemos registrar seu domínio (.com, .com.br, etc.) e configurar toda a hospedagem para você, facilitando o processo." />

          <Accordion question="Vou poder editar o conteúdo do meu site depois que ele for entregue?" answer="Sim! Criamos sites em plataformas com painel administrativo simples, para que você possa atualizar textos, imagens e produtos facilmente, sem precisar saber programar." />

          <Accordion question="Vocês oferecem suporte ou manutenção após a entrega do site?" answer="Sim, oferecemos planos de suporte e manutenção para atualizações, backups e melhorias contínuas — tudo para manter seu site sempre atualizado e seguro." />

          <Accordion question="O site será responsivo (funcionará em celular e tablet)?" answer="Sim! Todos os nossos sites são 100% responsivos, garantindo uma ótima experiência em qualquer dispositivo." />
        </div>
      </div>
    </section>
  )
}