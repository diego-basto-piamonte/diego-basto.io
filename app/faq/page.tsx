import faqData from '@/data/faq.json';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <article className="mt-8 flex flex-col gap-8 pb-8 w-100">
            <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col flex-1">
                    <h1 className="section-title">
                        Frequently Asked Questions 
                    </h1>
                    <p className="mt-4 text-muted-foreground space-y-2">Learn a bit more about me.</p>
                    <Accordion type='single' collapsible>
                        {faqData.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>    
                        ))}
                    </Accordion>
                </div>
            </section>
        </article>
    )
}