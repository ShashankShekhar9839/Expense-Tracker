"use client";

interface WeeklyBudgetAnalysisProps {
  title?: string;
  onClick?: () => void;
  bgColor?: string;
}

function WeeklyBudgetAnalysis({
  title,
  onClick,
  bgColor,
}: WeeklyBudgetAnalysisProps) {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColor}`}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
    </div>
  );
}

export default WeeklyBudgetAnalysis;
