"use client";

import { Home, PlusCircle, BarChart3, User } from "lucide-react";
import Button from "../Button/Button";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md flex justify-around items-center py-3 z-2 px-4">
      <Button variant="ghost">
        <Home className="w-8 h-8 text-blue-500" />
      </Button>
      <Button variant="ghost">
        <PlusCircle className="w-8 h-8 text-blue-500" />
      </Button>
      <Button variant="ghost">
        <BarChart3 className="w-8 h-8 text-blue-500" />
      </Button>
      <Button variant="ghost">
        <User className="w-8 h-8 text-blue-500" />
      </Button>
    </div>
  );
}
