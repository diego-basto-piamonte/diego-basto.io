import { Blog } from "@/lib/schemas";
import { Card, CardTitle } from "./ui/card";
import Link from "next/link";


interface Props {
    blog: Blog;
}

export default function BlogItem({ blog }: Props) {
    const { title, description, date, slug } = blog;

    return (
        <Link href={"./blog/" + slug}>
            <div className="text-pretty text-xs text-muted-foreground">{date}</div>
            <Card className="flex flex-col hover:text-muted-foreground border-none shadow-transparent">
                <CardTitle className="text-lg px-0 pt-2">{title}</CardTitle>
                <div className="flex-row justify-between">
                    <div className="text-pretty text-sm text-muted-foreground py-2">{description}</div>
                </div>
            </Card>
            <hr className="border-t border-muted my-2" />
        </Link>
    )
}
