import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant? : "primary" | "secondary"
}

const  Button : React.FC<ButtonProps> = ({
     children, 
     variant = "primary",
     className, 
     ...props
}) => {
    const base = 'w-full py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2z';
  
    const variants = {
        primary : "bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-[var(--color-primary-dark)] focus:ring-[var(--color-primary)]",

        secondary : "bg-[var(--color-white)] text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-bg)] focus:ring-[var(--color-primary)]",
    }

    return (
        <button className={clsx(base, variants[variant], className)} {...props}>{children}</button>
    )

}

export default Button;