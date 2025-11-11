import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Initial from "./sections/Initial";
import Questions from "./sections/Questions";
import Services from "./sections/Services";

export default function HomeScren() {
  return (
    <main className="w-dvw h-max flex flex-col justify-center items-center">
      <Header />
      <Initial />
      <About />
      <Services />
      <Contact />
      <Questions />
      <Footer />
    </main >
  )
}