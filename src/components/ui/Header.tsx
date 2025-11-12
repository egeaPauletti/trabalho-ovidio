import { useEffect, useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "./Button";
import HamburgerMenu from "./NavbarMenu";

export default function Header() {
    const [userName, setUserName] = useState<string | null>(null);
    useEffect(() => {
        const syncUserFromSession = () => {
            if (typeof window === "undefined") {
                return;
            }

            const storedId = sessionStorage.getItem("user_id");
            const storedName = sessionStorage.getItem("user_name");

            if (storedId && storedName) {
                setUserName(storedName);
            } else {
                setUserName(null);
            }
        };

        const handleStorage = (event: StorageEvent) => {
            if (event.storageArea === sessionStorage && (event.key === "user_id" || event.key === "user_name")) {
                syncUserFromSession();
            }
        };

        const handleSessionChange = () => {
            syncUserFromSession();
        };

        syncUserFromSession();
        window.addEventListener("storage", handleStorage);
        window.addEventListener("user-session-change", handleSessionChange);

        return () => {
            window.removeEventListener("storage", handleStorage);
            window.removeEventListener("user-session-change", handleSessionChange);
        };
    }, []);

    const menuItems = [
        { label: "Início", href: "#" },
        { label: "Sobre", href: "#sobre" },
        { label: "Serviços", href: "#servicos" },
        { label: "Contato", href: "#contato" },
    ];
    function Logout() {
        sessionStorage.clear()
        setUserName(null)
        window.location.reload();
    }

    return (
        <>
            <header className="max-sm:hidden w-[90%] h-max flex sm:flex-col max-sm:flex-col max-sm:items-start justify-between px-10 items-center py-4 mt-10 z-100 fixed top-0 glasseffect md:gap-5 xl:flex-row">
                <figure className="flex justify-center font-bold text-3xl gap-10">
                    <h1 className="text-primary">RadTech</h1>
                </figure>
                <div className="flex max-sm:flex-col justify-center items-center text-base gap-10 text-black z-50">
                    <nav>
                        <ul className="flex justify-center gap-8 cursor-pointer font-semibold text-base">
                            <li className="underlineAnimation">Home</li>
                            <li className="underlineAnimation">Sobre nós</li>
                            <li className="underlineAnimation">Serviços</li>
                            <li className="underlineAnimation">Contato</li>
                        </ul>
                    </nav>
                    {userName ? (
                        <div className="flex flex-col lg:flex-row lg:gap-10 gap-2.5 items-center">
                            <div className="flex items-center text-primary gap-1">
                                <span className="font-semibold text-primary text-base">Olá, {userName}</span>
                                <button onClick={Logout} className="text-lg font-bold cursor-pointer hover:scale-120"><RiLogoutBoxRLine /></button>
                            </div>
                            <Link to={"/dashboard"}>
                                <Button text="Entrar" isFilled />
                            </Link>
                        </div>
                    ) : (
                        <Link to={"/auth"}>
                            <Button text="Acessar" isFilled />
                        </Link>
                    )}
                </div>
            </header>
            <header className="hidden max-sm:flex fixed top-2.5 z-100 items-center rounded-lg justify-around w-dvw h-max gap-5 bg-white px-10 py-5">
                <div className="w-full h-max flex justify-between items-center">
                    <div>
                        <HamburgerMenu items={menuItems} />
                    </div>
                </div>
                <figure className="w-full flex font-bold text-3xl text-center">
                    <h1>RadTech</h1>
                </figure>
            </header>
        </>
    )
}