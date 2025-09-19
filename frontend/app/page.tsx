// app/page.tsx
"use client"; // because we are using navigation

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const goToExpenses = () => {
    router.push("/expenses");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to Expense Tracker</h1>
      <p className="mb-4 text-lg text-gray-600">
        Track your expenses effortlessly.
      </p>
      <button
        onClick={goToExpenses}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Expenses
      </button>
    </main>
  );
}
