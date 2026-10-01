import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="border-current/15 border-t">
      {items.map((item) => (
        <details key={item.id} className="border-current/15 group border-b">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 text-left text-sm font-semibold tracking-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500">
            {item.title}
            <ChevronDown
              className="size-4 shrink-0 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pb-6 text-sm leading-7 opacity-65">
            {item.content}
          </p>
        </details>
      ))}
    </div>
  );
}
