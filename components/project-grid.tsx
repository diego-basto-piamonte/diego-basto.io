import { ProjectItem } from "./project-item";
import projectsData from "@/data/projects.json";

export default function ProjectGrid(){
    return (
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            {
                projectsData.map((project, idx) => (
                    <ProjectItem key={idx} project={project} />
                ))
            }
        </section>
    )
}