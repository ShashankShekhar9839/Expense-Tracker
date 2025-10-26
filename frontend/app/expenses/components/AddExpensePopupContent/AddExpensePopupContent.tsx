"use client";

import { Input } from "@/app/components";

function AddExpensePopupContent() {
  return (
    <div>
      <form className="space-y-4">
        <div className="flex gap-4 flex-col overflow-hidden">
          <Input type="string" placeholder="Expense Name" />
          <Input type="number" placeholder="Amount" className="mt-4" />
          <Input type="date" placeholder="Date" className="mt-4" />
          <div className="relative w-full">
            <select className="border rounded-lg p-3 relative z-20 bg-white">
              <option disabled selected>
                Select Category
              </option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="entertainment">Entertainment</option>
              <option value="utilities">Utilities</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddExpensePopupContent;
