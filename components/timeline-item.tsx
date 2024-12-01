import { ExperienceSchema, Experience } from "@/lib/schemas/schema-experience";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";

interface Props {
  experience: Experience;
}

export default function TimelineItem({ experience }: Props) {
  const { name, href, title, logo, start, end, description, links } =
    experience;

    const result = ExperienceSchema.safeParse(experience); 
    if (!result.success){
        console.error(result.error);
        return null; // for now, return null if the schema is not valid
    }

return (
    <div className="relative ml-10 py-4">
        <Link
            href={href}
            target="_blank"
            className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
        >
            <Avatar className="size-12 border">
                <AvatarImage
                    src={logo}
                    alt={name}
                    className="bg-background object-contain"
                />
                <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
        </Link>
        <div className="flex flex-1 flex-col justify-start gap-1">
            {start && (
                <time className="text-xs text-muted-foreground">
                    <span>{start.toString()}</span>
                    <span>{" - "}</span>
                    <span>{end?.toString() ? end.toString() : "Present"}</span>
                </time>
            )}
            <h2 className="font-semibold leading-none">{name}</h2>
            {title && <p className="text-sm text-muted-foreground">{title}</p>}
            {description && (
                <ul className="ml-4 list-outside list-disc">
                    {description.map((desc, i) => (
                        <li key={i} className="prose pr-8 text-sm dark:prose-invert">
                            {desc}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        {links && links.length > 0 && (
            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                {links?.map((link, idx) => (
                    <Link href={link.href} key={idx}>
                        <Badge key={idx} className="flex gap-2" variant="secondary">
                            {link.name}
                            <ArrowUpRight className="size-4" />
                        </Badge>
                    </Link>
                ))}
            </div>
        )}
    </div>
);
}