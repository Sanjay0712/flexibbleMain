"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";

type Props = {
  startCursor: string;
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
function LoadMore({
  startCursor,
  endCursor,
  hasNextPage,
  hasPreviousPage,
}: Props) {
  const router = useRouter();

  const handleNavigation = (direction: string) => {
    const currentParams = new URLSearchParams(window.location.search);

    if (direction === "next" && hasNextPage) {
      currentParams.delete("startcursor");
      currentParams.set("endcursor", endCursor);
    } else if (direction === "first" && hasPreviousPage) {
      currentParams.delete("endcursor");
      currentParams.set("startcursor", startCursor);
    }

    const newSearchParams = currentParams.toString();
    const pathName = `${window.location.pathname}?${newSearchParams}`;
    router.push(pathName);
  };

  return (
    <div className="w-full flexCenter gap-5 mt-10">
      {hasPreviousPage && (
        <Button
          title="First Page"
          handleClick={() => handleNavigation("first")}
        ></Button>
      )}
      {hasPreviousPage && (
        <Button
          title="Next"
          handleClick={() => handleNavigation("next")}
        ></Button>
      )}
    </div>
  );
}

export default LoadMore;
