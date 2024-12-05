import Link from "next/link";
import Socials from "./socials";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center pb-16 sm:flex-row-reverse sm:justify-between">
            <div className="mt-4 sm:mt-0">
                <Socials />
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
                <p className="text-sm font-light">&copy; 2024 Diego Basto Piamonte</p>
            </div>
            
        </footer>
    );
}