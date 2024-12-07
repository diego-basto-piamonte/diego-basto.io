import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Blog = {
    metadata: BlogMetadata,
    content: string,
}

export type BlogMetadata = {
    title: string,
    description: string,
    image: string,
    date: string,
    slug: string
}

export async function getBlog(dir: string, slug: string): Promise<Blog | null> {
    try {
        const filePath = path.join(dir, `${slug}.mdx`)
        const fileContent = await fs.readFileSync(filePath, 'utf-8')
        const { data, content } = matter(fileContent)

        const metadata: BlogMetadata = {
            title: data.title,
            description: data.description,
            image: data.image,
            date: data.date,
            slug: slug
        }

        return { metadata, content }

    } catch (e) {
        console.error(e)
        return null
    }
}

export async function getBlogs(dir: string, limit: number = 5): Promise<BlogMetadata[]> {
    const files = fs.readdirSync(dir)

    const blogs = files
        .filter((file) => file.endsWith(".mdx")) // might have .DS_Store?
        .map((file) => getBlogMetadata(dir, file))
        .sort((a, b) => (new Date(b.date ?? "").getTime() || 0) - (new Date(a.date ?? "").getTime() || 0),)
    
    if (limit) return blogs.slice(0, limit)

    return blogs;

}

export function getBlogMetadata(dir: string, filePath: string): BlogMetadata {
    const slug = filePath.replace(/\.mdx$/, '')
    const fullFilePath = path.join(dir, filePath)
    const fileContent = fs.readFileSync(fullFilePath, 'utf-8')

    const { data } = matter(fileContent)

    return {
        title: data.title,
        description: data.description,
        image: data.image,
        date: data.date,
        slug: slug
    }
}