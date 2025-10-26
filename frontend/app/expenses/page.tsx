"use client";
import { useState } from "react";
import { BottomNav } from "@/components";
import Popup from "./components/AddExpensePopup/AddExpensePopup";
import AddExpensePopupContent from "./components/AddExpensePopupContent/AddExpensePopupContent";

export default function ExpensesPage() {
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

  const handleAddExpense = () => {
    setIsAddExpenseOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-6 pb-20">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Expense Tracker
        </h1>
      </div>

      {isAddExpenseOpen && (
        <Popup
          isOpen={isAddExpenseOpen}
          onClose={() => setIsAddExpenseOpen(false)}
          title="Add Expense"
        >
            <AddExpensePopupContent />
        </Popup>
      )}

      <BottomNav onClickAdd={handleAddExpense} />
    </main>
  );
}
