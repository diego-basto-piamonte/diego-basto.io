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

// Export the schema and the inferred TypeScript type
export { ExperienceSchema };
export type Experience = z.infer<typeof ExperienceSchema>;