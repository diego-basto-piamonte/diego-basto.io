"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const navLinks = [
    {
        name: "home", 
        href: "/",
    }, 
    {
        name: "projects", 
        href: "/projects",
    }, 
    // {
    //     name: "blog", 
    //     href: "/blog",
    // }, 
    // {
    //     name: "Contact", 
    //     href: "/contact",
    // },
    {
        name: "FAQ", 
        href: "/faq",
    },
]; 

export default function Header(){
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 relative py-6 before:absolute before:inset-0 before:-mx-[50vw] before:bg-background/80 before:backdrop-blur-sm before:-z-10 before:content-['']">
            <nav className="flex items-center justify-between">
                <ul className="flex gap-4 sm:gap-8">
                    {navLinks.map((nav, id) => (
                        <li className="link" key={id}>
                            <Link href={nav.href}>
                                <span className={pathname === nav.href ? "underline" : ""}> {nav.name} </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-0 sm:gap-4">
                    <ThemeToggle/>
                    {/* // TODO: eventually add chatbot here */}
                </div>
            </nav>
        </header>
    );
}