import Image from "next/image";
import React, { MouseEventHandler } from "react";

type Props = {
  title?: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  type?: "button" | "submit";
  isSubmitting?: boolean;
  bgColor?: string;
  textColor?: string;
  handleClick?: MouseEventHandler;
};
function Button({
  title,
  leftIcon,
  type,
  isSubmitting,
  rightIcon,
  bgColor,
  textColor,
  handleClick,
}: Props) {
  return (
    <button
      className={`flexCenter gap-3 px-4 py-3
      ${textColor || "text-white"}
      ${
        isSubmitting ? "bg-black-100" : bgColor || "bg-primary-purple"
      } rounded-xl text-sm font-medium max-md:w-full `}
      type={type || "button"}
      disabled={isSubmitting}
      onClick={handleClick}
    >
      {leftIcon && <Image src="/plus.svg" width={14} height={14} alt="left" />}
      {title}
      {rightIcon && (
        <Image src={rightIcon} width={14} height={14} alt="right" />
      )}
    </button>
  );
}

export default Button;
