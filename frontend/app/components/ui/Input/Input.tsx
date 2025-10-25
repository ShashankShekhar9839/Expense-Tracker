import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

 const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return (
    <div>
      <input
        {...props}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-primary)]"
      />
    </div>
  );
};

export default Input;
