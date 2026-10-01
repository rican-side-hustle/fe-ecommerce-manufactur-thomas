import { Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { Testimonial } from "@/types/content";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="border-b border-surface-200 bg-surface-100 py-20 text-fg sm:py-28">
      <Container>
        <Reveal>
          <p className="text-xs font-medium tracking-normal text-signal-600">
            Operator feedback
          </p>
          <h2 className="mt-5 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
            Built for work, proven by use.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 0.08}
              className="rounded-2xl bg-surface-100 p-7 sm:p-10"
            >
              <div
                className="flex gap-1"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: testimonial.rating }, (_, star) => (
                  <Star
                    key={star}
                    className="size-4 fill-signal-500 text-signal-600"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-8 font-display text-2xl font-medium leading-tight sm:text-3xl">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-8 text-xs font-medium tracking-normal">
                {testimonial.author}
              </p>
              <p className="mt-1 text-xs text-steel-500">{testimonial.role}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
