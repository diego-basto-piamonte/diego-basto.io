import path from 'path';
import { getBlog } from "@/lib/blogs";
import MDXContent from "@/components/mdx-content";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from 'next/link';

interface BlogPostProps {
    params: Promise<{ slug: string }>  
}


const blogDir = path.join(process.cwd(), 'content')

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params
    const blog = await getBlog(blogDir, slug)

    if (!blog) return { notFound: true }

    const { metadata, content } = blog
    const { title, description, image, date } = metadata

    return (
        <article className="mt-8 flex flex-col gap-8 pb-16">
            <Link href="/blog">
                <Button variant="outline">
                    <ArrowLeft className="size-5" />
                    <span className="font-semibold">Back</span>
                </Button>
            </Link>

            {image && (
                <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg border">
                    <Image src={image} alt={title || ""} className="object-cover" fill />
                </div>
            )}

            <header>
                <h1 className="section-title">{title}</h1>
                <div className="mt-2 text-sm text-muted-foreground">{description}</div>
                <p className="mt-2 text-xs text-muted-foreground">
                    {formatDate(date ?? "")}
                </p>
            </header>

            <main className="prose dark:prose-invert">
                <MDXContent source={content} />
            </main>
        </article>
    )


}