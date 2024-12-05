import TimelineItem from "./timeline-item";
import { Experience } from "@/lib/schemas";
import { Card, CardContent } from "./ui/card";

interface Props {
  experiences: Experience[];
}   

export default function Timeline({ experiences }: Props) {
  return (
    <Card >
        <CardContent className="p-0">
            <ul className="ml-10 border-l">
                {
                    experiences.map((experience, idx) => (
                        <TimelineItem key={idx} experience={experience} />
                ))}
            </ul>
        </CardContent>
    </Card>
  );
}   