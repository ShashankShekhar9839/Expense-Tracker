import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white  p-8 w-full max-w-md">
    {children}
  </div>
);

export default Card;
