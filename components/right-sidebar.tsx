export function RightSidebar() {
  return (
    <div className="w-40 flex flex-col gap-6">
      {/* EMR Items Container */}
      <div className="relative">
        <div className="space-y-4">
          {["EMR 1", "EMR 2", "EMR n"].map((emr, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {/* Connecting Line */}
              <div
                className="absolute left-0 w-6 h-12 border-l-2 border-b-2 border-slate-300"
                style={{ top: idx * 64 + 20 }}
              ></div>

              {/* EMR Box */}
              <div className="ml-8 bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col items-center gap-2 w-24">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                <img src={"/emr.svg"} alt={"emr"} className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center whitespace-nowrap">
                  {emr}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Indicator */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <div className="flex flex-col items-center justify-between h-24">
          <div className="grid grid-cols-2 gap-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-emerald-500 rounded"></div>
            ))}
          </div>
          <div className="flex items-center gap-2 justify-center">
            <button className="text-gray-400 hover:text-gray-600">−</button>
            <span className="text-xs font-medium text-gray-700">100%</span>
            <button className="text-gray-400 hover:text-gray-600">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
