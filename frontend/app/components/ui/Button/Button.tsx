import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center font-semibold transition-all focus:outline-none",
        // Size variants (apply to all)
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        // Variant styles
        variant === "primary" &&
          "bg-blue-500 text-white rounded-xl hover:bg-blue-600 px-4 py-3 w-full",
        variant === "secondary" &&
          "bg-white text-blue-500 border border-blue-500 rounded-xl hover:bg-blue-50 px-4 py-2",
        variant === "ghost" &&
          "bg-transparent hover:bg-blue-50 text-blue-500 rounded-full w-10 h-10",
        className
      )}
      {...props}
    />
  );
};
export default Button;
