import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/schemas";
import { ArrowUpRight } from "lucide-react";

interface Props {
    project: Project;
}

export function ProjectItem({ project }: Props) {
    const { image = "", href, title, description, tags, links } = project;

    return (
        <Card className="flex flex-col">

            <CardHeader>
                {/* Image */}
                <a href={href} target="_blank">
                    <Image
                        className="h-40 w-full object-cover object-top rounded-lg border"
                        src={image}
                        width={200}
                        height={200}
                        alt="image description"
                    />
                </a>
            </CardHeader>



            {/* Content */}
            <CardContent className="flex flex-col flex-1 p-4">
                <CardTitle>{title}</CardTitle>
                <div className="text-pretty text-xs text-muted-foreground py-2">{description}</div>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                        {tags.toSorted().map((tag) => (
                            <Badge
                                key={tag}
                                className="px-3 py-1 text-xs cursor-pointer"
                                variant="secondary"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex flex-col items-start justify-between p-4">

                {links && links.length > 0 && (
                    <div className="mt-4 flex flex-row flex-wrap items-start gap-2">
                        {links?.map((link, idx) => (
                            <Link href={link.href} key={idx} target="_blank">
                                <Badge key={idx} className="flex gap-1 text-sm">
                                    {link.name}
                                    <ArrowUpRight className="size-4" />
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    )

}