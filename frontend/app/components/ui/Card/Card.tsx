import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
    {children}
  </div>
);

export default Card;
