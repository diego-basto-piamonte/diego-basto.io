import path from 'path';
import { getBlog, getBlogs } from "@/lib/blogs";
import MDXContent from "@/components/mdx-content";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import Image from "next/image";


const blogDir = path.join(process.cwd(), 'content')

async function generateStaticParams() {
    const blogs = await getBlogs(blogDir)
    const slugs = blogs.map((blog) => { slug: blog.slug })
    return slugs
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const blog = await getBlog(blogDir, slug)

    if (!blog) return { notFound: true }

    const { metadata, content } = blog
    const { title, description, image, date } = metadata

    return (
        <article className="mt-8 flex flex-col gap-8 pb-16">
            <a href="/blog">
                <Button variant="outline">
                    <ArrowLeft className="size-5" />
                    <span className="font-semibold">Back</span>
                </Button>
            </a>

            {image && (
                <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
                    <Image src={image} alt={title || ""} className="object-cover" fill />
                </div>
            )}

            <header>
                <h1 className="title">{title}</h1>
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