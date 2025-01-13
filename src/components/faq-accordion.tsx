import * as Accordion from '@radix-ui/react-accordion';

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none" {...props}>
      <path
        d="M37.5 20.5C37.504 21.0127 37.3481 21.5139 37.0541 21.934C36.7601 22.354 36.3425 22.672 35.8594 22.8438L25.9469 26.4484L22.3438 36.3594C22.1662 36.8378 21.8464 37.2505 21.4275 37.5418C21.0085 37.8332 20.5104 37.9894 20 37.9894C19.4897 37.9894 18.9916 37.8332 18.5726 37.5418C18.1536 37.2505 17.8339 36.8378 17.6563 36.3594L14.0516 26.4375L4.14066 22.8438C3.66221 22.6662 3.24958 22.3464 2.95819 21.9274C2.66681 21.5085 2.51062 21.0103 2.51062 20.5C2.51062 19.9897 2.66681 19.4915 2.95819 19.0726C3.24958 18.6536 3.66221 18.3338 4.14066 18.1563L14.0625 14.5516L17.6563 4.64063C17.8339 4.16218 18.1536 3.74955 18.5726 3.45816C18.9916 3.16677 19.4897 3.01059 20 3.01059C20.5104 3.01059 21.0085 3.16677 21.4275 3.45816C21.8464 3.74955 22.1662 4.16218 22.3438 4.64063L25.9485 14.5625L35.8594 18.1563C36.3425 18.328 36.7601 18.646 37.0541 19.066C37.3481 19.4861 37.504 19.9873 37.5 20.5Z"
        fill="#AD28EB"
      />
    </svg>
  );
}

function AccordionToggleIcon() {
  return (
    <span className="flex h-[30px] w-[30px] items-center justify-center">
      <span
        className="pointer-events-auto relative block h-6 w-6 rounded-full transition-colors duration-300 group-data-[state=closed]:bg-pink-800 group-data-[state=open]:bg-black"
        aria-hidden
      >
        <span className="absolute left-1/2 top-1/2 block h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute left-1/2 top-1/2 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-300 group-data-[state=closed]:h-3 group-data-[state=open]:h-0" />
      </span>
    </span>
  );
}

type FAQAccordionProps = {
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
};

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <section className="shadow-card relative w-full max-w-xl rounded-lg bg-white p-6 sm:rounded-2xl sm:p-10">
      <div className="flex items-center gap-x-6">
        <StarIcon className="h-6 w-6 sm:h-10 sm:w-10" />
        <h1 className="text-xl font-bold text-purple-900 sm:text-2xl">FAQs</h1>
      </div>
      <Accordion.Root
        type="single"
        className="mt-6 divide-y divide-pink-100 sm:mt-8"
        defaultValue={faqs[0].id.toString()}
      >
        {faqs.map(({ id, question, answer }) => (
          <Accordion.Item
            key={id}
            value={id.toString()}
            className="py-5 first:pt-0 last:pb-0 sm:py-6"
          >
            <Accordion.Header className="h-[1.875rem] w-full">
              <Accordion.Trigger className="group pointer-events-none flex w-full items-center justify-between text-base font-medium text-purple-900 sm:text-lg">
                <span className="xs:max-w-none pointer-events-auto max-w-56 text-start transition-colors duration-200 group-data-[state=closed]:hover:text-pink-800">
                  {question}
                </span>
                <AccordionToggleIcon />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden text-sm data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown sm:text-base sm:leading-6">
              <div className="pt-6">{answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
