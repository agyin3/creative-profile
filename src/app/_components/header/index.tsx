"use client";
import { useEffect, useState } from "react";
import Burger from "../svg/burger";
import Close from "../svg/close";
import { NavLink } from "./data";

interface HeaderProps {
    navLinks: NavLink[];
}

export const Header = ({ navLinks }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        return () => setIsOpen(false); // close menu on unmount
    }, []);

    const handleNavClick = ({ href, id }: { href?: string; id?: string }) => {
        let element;
        if (id) {
            element = document.querySelector(id);
        }
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        } else if (href) {
            window.location.href = href;
        }
        setIsOpen(false);
    };

    return (
        <>
            <header className="flex items-center justify-end w-full fixed top-0 left-0 p-5">
                <Burger
                    className="hover:cursor-pointer"
                    onClick={() => setIsOpen(true)}
                />
            </header>
            {isOpen ? (
                <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center z-10">
                    <div className="fixed top-0 right-0 p-5">
                        <Close
                            className="hover:cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                    <nav className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <p
                                key={link.title}
                                className="text-secondary text-2xl sm:text-6xl hover:underline hover:pointer"
                                onClick={() =>
                                    handleNavClick({
                                        href: link.href || "",
                                        id: link.id,
                                    })
                                }
                            >
                                {link.title}
                            </p>
                        ))}
                    </nav>
                </div>
            ) : null}
        </>
    );
};
