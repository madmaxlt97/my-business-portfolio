import { Price } from "@/types/prices";

type priceItemProps = {
  price: Price;
};

export default function PriceItem({ price }: priceItemProps) {
  return (
    <article className="flex h-full flex-col border border-slate-200 bg-white p-6 md:p-8">
      <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
        {price.title}
      </h3>
      <p className="mt-6 text-4xl font-semibold tracking-tight text-slate-900">
        {price.price}
      </p>
      <p className="mt-4 text-base leading-7 text-slate-600">
        {price.description}
      </p>
    </article>
  );
}
