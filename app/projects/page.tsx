// import { FlaskConical } from "lucide-react"
import ProjectGrid from "@/components/project-grid"

export default function Projects(){
    return (
        <article className="mt-8 flex flex-col gap-8 pb-8">
            <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col flex-1">
                    <h1 className="section-title">
                        Projects 
                        {/* <FlaskConical className="size-8 inline-block p-1" /> */}
                    </h1>
                    <div className="mt-4 text-muted-foreground space-y-2">Just for fun.</div>
                </div>
            </section>
            <section className="gap-4">
                <ProjectGrid />
            </section>
        </article>
    )
}