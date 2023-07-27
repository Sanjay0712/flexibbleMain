"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode, useRef } from "react";

function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (e.target === overlay.current) {
      router.push("/");
    }
  };

  const onDismiss = () => {
    router.push("/");
  };

  return (
    <div ref={overlay} className="modal" onClick={handleClick}>
      <button className="absolute top-4 right-8" onClick={onDismiss}>
        <Image src="/close.svg" width={17} height={17} alt="close" />
      </button>
      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
}

export default Modal;
