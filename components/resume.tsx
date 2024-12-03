import { FileDownIcon } from "lucide-react";
import { Button } from "./ui/button";

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

