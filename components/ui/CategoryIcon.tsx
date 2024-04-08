"use client";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export const CategoryIcon = ({ id, name, slug }: Category) => {
  const { category } = useParams() as { category: string };
  return (
    <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
      <div className="relative size-16">
        <Image src={`/icon_${slug}.svg`} fill priority alt={name} />
      </div>
      <Link href={`/order/${slug}`} className={`font-semibold text-xl ${category === slug ? "text-amber-500" : ""}`}>
        {name}
      </Link>
    </div>
  );
};
