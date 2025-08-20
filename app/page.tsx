'use client'

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Socials from "@/components/socials";
import Resume from "@/components/resume";
import Timeline from "@/components/timeline";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Typewriter from "@/components/typewriter";
import { Button } from "@/components/ui/button";
import { useChatStore } from "./context/ChatStore";

export default function Home() {

    const { toggleChat } = useChatStore();

    return (
        <article className="mt-8 flex flex-col gap-8 pb-8 w-100">
            {/* Introduction */}
            <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col flex-1">
                    <h1 className="title">Diego Basto Piamonte 🚀</h1>
                    <h2 className="mt-4 h2 text-2xl">
                        <Typewriter
                            texts={['Product Manager', 'Software Engineer', 'Data Analyst', 'Consultant']}
                            typingSpeed={75}
                            pauseTime={2500}
                        />
                    </h2>
                    <div className="mt-4 flex items-center gap-2">
                        <p className="font-light hover:text-muted-foreground">📍 Perth, Western Australia</p>
                    </div>
                    <div className="mt-4 font-light space-y-2">
                        <b>A bit about Diego</b>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>25-year-old tech enthusiast from Australia 🇦🇺 </li>
                            <li>5+ years experience in tech consulting</li>
                            <li>10+ digital products delivered to clients</li>
                        </ul>
                    </div>
                    <p className="mt-4 font-light">
                        Bridging the gap between technical complexities and strategic objectives,
                        leading cross-functional teams to product success.
                    </p>
                    <div className="mt-4 flex items-end gap-1 font-semibold">
                        <p>
                            Have a question? Raise a ticket with{' '}
                            <Button
                                onClick={() => toggleChat(true)}
                                className="text-primary hover:underline focus:outline-none m-0 p-0 font-semibold text-md"
                                variant="link"
                            >
                                Tech Support
                                <ArrowDownRight className="size-5" />
                            </Button>
                        </p>
                    </div>
                    <section className="mt-8 flex items-center gap-8">
                        <Resume />
                        <Socials />
                    </section>
                </div>
                <div className="flex flex-col">
                    <figure className="max-w-lg">
                        <Image className="h-auto max-w-full rounded-lg" src="/diego-in-japan.jpeg" width={200} height={200} alt="image description" />
                        <figcaption className="mt-2 text-sm text-center font-extralight">Diego in Japan</figcaption>
                    </figure>
                </div>
            </section>

            {/* Experience / Education */}
            <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">

                <Tabs defaultValue="account" className="flex flex-col gap-0">
                    <TabsList>
                        <TabsTrigger value="account" className="w-full">Experience</TabsTrigger>
                        <TabsTrigger value="password" className="w-full">Education</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Timeline experiences={experienceData} />
                    </TabsContent>
                    <TabsContent value="password">
                        <Timeline experiences={educationData} />
                    </TabsContent>
                </Tabs>
            </section>

            {/* My Tech Stack */}
            <section className="flex flex-col items-start gap-8">
                {/* <div className="section-title">My Tech Stack</div> */}
            </section>
        </article>
    );
}