"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categoryFilters } from "@/constants";
function Categories() {
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const category = searchparams.get("category");
  const handleTags = (filter: string) => {
    router.push(`${pathname}?category=${filter}`);
  };

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <ul className="flex gap-2 overflow-auto">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${
              category === filter
                ? "bg-light-white-300 font-medium"
                : "font-normal"
            } px-4 rounded-lg py-4 capitalize whitespace-nowrap`}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
