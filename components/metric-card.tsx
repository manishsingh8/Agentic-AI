// import { TrendingUp, TrendingDown } from "lucide-react";

// interface MetricCardProps {
//   label: string;
//   value: string;
//   change: string;
//   color: "green" | "orange" | "red";
// }

// export function MetricCard({ label, value, change, color }: MetricCardProps) {
//   const colorClasses = {
//     green: "text-green-500 border-green-500",
//     orange: "text-orange-500 border-orange-500",
//     red: "text-red-500 border-red-500",
//   };

//   const isNegative = change.startsWith("-");
//   const TrendIcon = isNegative ? TrendingDown : TrendingUp;

//   return (
//     <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <p className="text-gray-600 text-sm font-medium">{label}</p>
//           <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
//         </div>
//         <div
//           className={`flex items-center gap-1 px-3 py-1 rounded-full border-2 ${colorClasses[color]}`}
//         >
//           <TrendIcon className="w-4 h-4" />
//           <span className="text-sm font-semibold">{change}%</span>
//         </div>
//       </div>
//       {/* Mini Chart */}
//       <div className="h-10 bg-gradient-to-r from-blue-50 to-purple-50 rounded flex items-end justify-around px-1">
//         <div
//           className={`w-1 rounded-t`}
//           style={{
//             height: "40%",
//             backgroundColor: colorClasses[color].split("-")[1].includes("green")
//               ? "#10b981"
//               : colorClasses[color].split("-")[1].includes("orange")
//               ? "#f97316"
//               : "#ef4444",
//           }}
//         />
//         <div
//           className={`w-1 rounded-t`}
//           style={{
//             height: "60%",
//             backgroundColor: colorClasses[color].split("-")[1].includes("green")
//               ? "#10b981"
//               : colorClasses[color].split("-")[1].includes("orange")
//               ? "#f97316"
//               : "#ef4444",
//           }}
//         />
//         <div
//           className={`w-1 rounded-t`}
//           style={{
//             height: "35%",
//             backgroundColor: colorClasses[color].split("-")[1].includes("green")
//               ? "#10b981"
//               : colorClasses[color].split("-")[1].includes("orange")
//               ? "#f97316"
//               : "#ef4444",
//           }}
//         />
//         <div
//           className={`w-1 rounded-t`}
//           style={{
//             height: "50%",
//             backgroundColor: colorClasses[color].split("-")[1].includes("green")
//               ? "#10b981"
//               : colorClasses[color].split("-")[1].includes("orange")
//               ? "#f97316"
//               : "#ef4444",
//           }}
//         />
//         <div
//           className={`w-1 rounded-t`}
//           style={{
//             height: "45%",
//             backgroundColor: colorClasses[color].split("-")[1].includes("green")
//               ? "#10b981"
//               : colorClasses[color].split("-")[1].includes("orange")
//               ? "#f97316"
//               : "#ef4444",
//           }}
//         />
//         <div
//           className={`w-1 rounded-t`}
//           style={{
//             height: "55%",
//             backgroundColor: colorClasses[color].split("-")[1].includes("green")
//               ? "#10b981"
//               : colorClasses[color].split("-")[1].includes("orange")
//               ? "#f97316"
//               : "#ef4444",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  color: "green" | "orange" | "red";
}

export function MetricCard({ label, value, change, color }: MetricCardProps) {
  const colorClasses = {
    green: "text-green-500 border-green-500",
    orange: "text-orange-500 border-orange-500",
    red: "text-red-500 border-red-500",
  };

  const colorMap = {
    green: "#10b981",
    orange: "#f97316",
    red: "#ef4444",
  };

  const isNegative = change.startsWith("-");
  const TrendIcon = isNegative ? TrendingDown : TrendingUp;

  const generateSparkline = () => {
    const points = [
      { x: 0, y: 45 },
      { x: 20, y: 70 },
      { x: 40, y: 35 },
      { x: 60, y: 65 },
      { x: 80, y: 25 },
      { x: 100, y: 55 },
      { x: 120, y: 40 },
    ];

    // Create smooth curve path using quadratic Bezier curves
    let pathD = `M ${points[0].x} ${100 - points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const xc = (points[i - 1].x + points[i].x) / 2;
      const yc = (100 - points[i - 1].y + 100 - points[i].y) / 2;
      pathD += ` Q ${points[i - 1].x} ${100 - points[i - 1].y} ${xc} ${yc}`;
    }
    pathD += ` T ${points[points.length - 1].x} ${
      100 - points[points.length - 1].y
    }`;

    return pathD;
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div
          className={`flex items-center gap-1 px-3 py-1 rounded-full border-2 ${colorClasses[color]}`}
        >
          <TrendIcon className="w-4 h-4" />
          <span className="text-sm font-semibold">{change}%</span>
        </div>
      </div>
      <div className="h-12 w-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 120 100"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d={generateSparkline()}
            stroke={colorMap[color]}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
