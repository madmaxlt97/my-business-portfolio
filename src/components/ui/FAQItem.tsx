"use client";
import { useState } from "react";
import { FAQ } from "@/types/faq";

type FAQItemProps = {
  faq: FAQ;
};

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="group border-t border-gray-200 px-4 py-8 transition-colors duration-300 hover:bg-black/[0.02]">
      <div>
        <button
          type="button"
          className="cursor-pointer flex w-full items-start justify-between gap-4 text-left"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
            {faq.question}
          </h3>
          <span className="shrink-0 text-2xl">{isOpen ? "-" : "+"}</span>
        </button>
        {isOpen ? (
          <p className="mt-3 max-w-2xl text-gray-600">{faq.answer}</p>
        ) : null}
      </div>
    </article>
  );
}
