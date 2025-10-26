"use client";

interface WeeklyBudgetAnalysisProps {
  title?: string;
  onClick?: () => void;
}

function WeeklyBudgetAnalysis({ title, onClick }: WeeklyBudgetAnalysisProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow-md border-gray-500 border-1 cursor-pointer`}
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
    </div>
  );
}

export default WeeklyBudgetAnalysis;
