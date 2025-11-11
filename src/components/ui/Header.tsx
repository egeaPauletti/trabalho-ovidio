import { Link } from "react-router-dom";
import Button from "./Button";
import HamburgerMenu from "./NavbarMenu";

export default function Header() {
    const menuItems = [
        { label: "Início", href: "#" },
        { label: "Sobre", href: "#sobre" },
        { label: "Serviços", href: "#servicos" },
        { label: "Contato", href: "#contato" },
    ];

    return (
        <>
            <header className="max-sm:hidden w-[90%] h-max flex max-sm:flex-col max-sm:items-start justify-between px-10 items-center py-4 mt-10 z-100 fixed top-0 glasseffect">
                <figure className="flex justify-center font-bold text-3xl gap-10">
                    <h1 className="text-primary">RadTech</h1>
                </figure>
                <div className="flex max-sm:flex-col justify-center items-center text-base gap-10 text-black z-50">
                    <nav>
                        <ul className="flex justify-center gap-8 cursor-pointer font-semibold">
                            <li className="underlineAnimation">Home</li>
                            <li className="underlineAnimation">Sobre nós</li>
                            <li className="underlineAnimation">Serviços</li>
                            <li className="underlineAnimation">Contato</li>
                        </ul>
                    </nav>
                    <Link to={"/auth"}>
                        <Button text="Entrar" isFilled />
                    </Link>
                </div>
            </header>
            <header className="hidden max-sm:flex flex-col fixed top-2.5 z-100 items-center rounded-lg justify-around w-dvw h-max gap-5 bg-white px-10 py-5">
                <figure className="w-full flex  font-bold text-3xl text-start">
                    <h1>RadTech</h1>
                </figure>
                <div className="w-full h-max flex justify-between items-center">
                    <div>
                        <HamburgerMenu items={menuItems} />
                    </div>
                    <div>
                        <Link to={"/auth"}>
                            <Button text="Entrar" isFilled />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}