import { Blog } from "@/lib/schemas";
import { Card, CardTitle, CardContent, CardFooter } from "./ui/card";


interface Props {
    blog: Blog;
}

export default function BlogItem({ blog }: Props) {
    const { title, description, href, date, slug } = blog;

    return (
        <a href={"./blog/" + slug}>
            <div className="text-pretty text-xs text-muted-foreground">{date}</div>
            <Card className="flex flex-col hover:text-muted-foreground border-none shadow-transparent">
                <CardTitle className="text-lg px-0 pt-2">{title}</CardTitle>
                <div className="flex-row justify-between">
                    <div className="text-pretty text-sm text-muted-foreground py-2">{description}</div>
                </div>
            </Card>
            <hr className="border-t border-muted my-2" />
        </a>
    )
}
