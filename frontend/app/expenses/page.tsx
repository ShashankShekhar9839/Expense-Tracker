"use client";
import { useState } from "react";
import { BottomNav } from "@/components";
import Popup from "./components/AddExpensePopup/AddExpensePopup";
import AddExpensePopupContent from "./components/AddExpensePopupContent/AddExpensePopupContent";
import SetBudgetCard from "./components/SetBudgetCard/SetBudgetCard";
import WeeklyBudgetAnalysis from "./components/WeeklyBudgetAnalysis/WeeklyBudgetAnalysis";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import HomePageGraph from "./components/HomePageGraph/HomePageGraph";

export default function ExpensesPage() {
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

  const handleAddExpense = () => {
    setIsAddExpenseOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 overflow-y-auto p-6 pb-20 text-white">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Expense Tracker
        </h1>
        <div className="my-4">
          <ProfileCard />
        </div>

        <div className="mb-4">
          <HomePageGraph />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SetBudgetCard />
          <WeeklyBudgetAnalysis
            title="Weekly Spend Analysis"
            bgColor="bg-orange-500"
          />
          <WeeklyBudgetAnalysis
            title="Monthly Spend Analysis"
            bgColor="bg-green-500"
          />
          <WeeklyBudgetAnalysis
            title="Yearly Spend Analysis"
            bgColor="bg-purple-500"
          />
          <WeeklyBudgetAnalysis
            title="Total Spend Analysis"
            bgColor="bg-rose-500"
          />
        </div>
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
