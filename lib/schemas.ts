import { z } from "zod";

const LinkSchema = z.object({
    href: z.string().url(),
    name: z.string(),
    icon: z.string(),
});

const ExperienceSchema = z.object({
    name: z.string(),
    href: z.string().url(),
    title: z.string(),
    logo: z.string(),
    start: z.string(),
    end: z.string().nullable(),
    description: z.array(z.string()),
    links: z.array(LinkSchema),
});

export const CareerSchema = z.object({ career: z.array(ExperienceSchema) });
export const EducationSchema = z.object({ education: z.array(ExperienceSchema) });
export { ExperienceSchema };
export type Experience = z.infer<typeof ExperienceSchema>;


const ProjectSchema = z.object({
    image: z.string().optional(),
    href: z.string().url().optional(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    links: z.array(LinkSchema),
});

export const ProjectsSchema = z.object({ projects: z.array(ProjectSchema) });
export type Project = z.infer<typeof ProjectSchema>;

const BlogSchema = z.object({
    title: z.string(),
    description: z.string(),
    href: z.string().url(),
    date: z.string(),
    slug: z.string(),
})

export const BlogsSchema = z.object({ blogs: z.array(BlogSchema) });
export type Blog = z.infer<typeof BlogSchema>;

