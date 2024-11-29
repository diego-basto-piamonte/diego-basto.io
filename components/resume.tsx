import { FileDownIcon, Link } from "lucide-react";
import { Button } from "./ui/button";
import { downloadPDF } from "@/lib/utils";

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    downloadPDF("/resume.pdf", "_blank");
}

export default function Resume() {
    return (
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDownIcon className="size-5" />
            </Button>
        </a>
    )

}

