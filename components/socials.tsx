import dynamicIconImports from "lucide-react/dynamicIconImports";
import Icon from "./icon";
import { Linkedin, Github, Mail } from "lucide-react";

const socials = [
    {
        name: "LinkedIn",
        icon: Linkedin, 
        href: "https://www.linkedin.com/in/diego-basto-piamonte-1584b9172/", 
    }, 
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/diego-basto-piamonte", 
    },  
    {
        name: "Email",
        icon: Mail,
        href: "mailto:dfbasto@gmail.com",
    },
]

export default function Socials(){
    return (
        <div className="flex gap-4">
            {socials.map((social, id) => (
                <a 
                    key={id}
                    title={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                    <social.icon aria-hidden="true" className="size-5"/>
                </a>
            ))}
        </div>
    );  
}