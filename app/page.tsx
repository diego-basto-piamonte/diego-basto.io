import Image from "next/image";
import { ArrowDownRight, FileDown, Link } from "lucide-react";
import Socials from "@/components/socials";
import Resume from "@/components/resume";

export default function Home() {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col flex-1">
            <h1 className="title">Diego Basto Piamonte 🚀</h1>
            <h2 className="mt-4 h2 text-2xl">
            Product Manager
            {/* <Typewriter
              options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true,
              }}
            /> */}
            
            </h2>
            <p className="mt-4 font-light">
              24-year-old tech enthusiast from Australia 🇦🇺 with 4+ years experience in product consulting, 
              specialised in delivering high-value digital products to clients. Adept at bridging the gap
              between technical complexities and strategic objectives to successfully lead cross-functional
              teams to product success.
            </p>
            <div className="mt-4 flex items-end gap-1">
              <p className="font-semibold">Ask Baby Jaguar 🐆 anything about me</p>
              <ArrowDownRight className="size-5 animate-bounce" />
            </div>
            <section className="mt-8 flex items-center gap-8">
              <Resume />
              <Socials />
            </section>
          </div>
          <div className="flex flex-col">
              <figure className="max-w-lg">
                <Image className="h-auto max-w-full rounded-lg" src="/diego-in-japan.jpeg" width={200} height={200} alt="image description"/>
                <figcaption className="mt-2 text-sm text-center font-extralight">Diego in Japan</figcaption>
              </figure>
          </div>

      </section>
    </article>
  );
}