import BlogItem from "./blog-item";
import blogsData from "@/data/blogs.json";

export default function BlogGrid(){
    return (
        <section className="grid grid-cols-1 gap-4">
            {
                blogsData.map((blog, idx) => (
                    <BlogItem key={idx} blog={blog} />
                ))
            }
        </section>
    )
}