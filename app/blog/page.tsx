import BlogGrid from "@/components/blog-grid";

export default function Blog() {
    return (
        <article className="mt-8 flex flex-col gap-8 pb-8 w-100">
            <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col flex-1">
                    <h1 className="section-title">
                        Blog 
                    </h1>
                    <p className="mt-4 text-muted-foreground space-y-2">Stay tuned.</p>
                </div>
            </section>
            <section className="gap-4">
                <BlogGrid />
            </section>
        </article>
    )
}