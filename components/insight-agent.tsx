import { Plus } from "lucide-react";

export function InsightAgent() {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-300" />
        <div className="bg-white border-2 border-gray-200 rounded-lg px-8 py-4 shadow-sm relative overflow-hidden">
          <span className="font-semibold text-gray-900">Insight Agent</span>
          <button className="absolute -top-1 -right-1 bg-[#249563] text-white  w-7 h-7 flex items-center justify-center hover:bg-green-600 rounded-[4px]">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
