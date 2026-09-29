export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

// UI scaffold for the product-detail specification and FAQ accordions.
export function Accordion(props: AccordionProps) {
  void props;
  return null;
}
