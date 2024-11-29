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
    {
        name: "blog", 
        href: "/blog",
    }, 
    {
        name: "contact", 
        href: "/contact",
    },
    {
        name: "FAQ", 
        href: "/faq",
    },
]; 

export default function Header(){
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
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