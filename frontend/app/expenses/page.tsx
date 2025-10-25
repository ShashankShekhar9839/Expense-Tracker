import { BottomNav } from "@/components";

export default function ExpensesPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-6 pb-20">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Expense Tracker
        </h1>
      </div>

      <BottomNav />
    </main>
  );
}
