import { TrendingUp, TrendingDown } from "lucide-react"

interface MetricsGridProps {
  activeAgent: string
}

const metricsConfig = {
  rcm: [
    { label: "Files Ingested", value: "126", trend: "+5%", positive: true },
    { label: "Docs Parsed", value: "118", trend: "+8%", positive: true },
    { label: "BAI", value: "12", trend: "-1%", positive: false },
    { label: "EDI 835", value: "34", trend: "+3%", positive: true },
    { label: "EOB", value: "52", trend: "+6%", positive: true },
    { label: "EDI 837", value: "9", trend: "-7%", positive: false },
  ],
  intake: [
    { label: "Files Ingested", value: "126", trend: "+5%", positive: true },
    { label: "Docs Parsed", value: "118", trend: "+3%", positive: true },
    { label: "BAI", value: "12", trend: "-1%", positive: false },
    { label: "EDI 835", value: "34", trend: "+3%", positive: true },
    { label: "EOB", value: "52", trend: "+6%", positive: true },
    { label: "EDI 837", value: "9", trend: "-7%", positive: false },
  ],
  reconciliation: [
    { label: "Total Candidates", value: "684", trend: "+5%", positive: true },
    { label: "Reconciled Count", value: "512", trend: "+8%", positive: true },
    { label: "Matched Amount", value: "1450236...", trend: "-1%", positive: false },
    { label: "Unmatched Amount", value: "281902.11", trend: "+3%", positive: true },
    { label: "Partial Match Amount", value: "90612.88", trend: "+6%", positive: true },
    { label: "Variance ABS", value: "1211.77", trend: "-7%", positive: false },
  ],
  cash: [
    { label: "Post Ready Amount", value: "820345.55", trend: "+15%", positive: true },
    { label: "Post Ready Count", value: "311", trend: "+8%", positive: true },
    { label: "Posted Amount", value: "612441.22", trend: "-1%", positive: false },
    { label: "Posted Count", value: "221", trend: "+3%", positive: true },
    { label: "Failures", value: "8", trend: "-6%", positive: true },
  ],
}

function MetricCard({ label, value, trend, positive }: any) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-gray-600">{label}</span>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 ${
            positive ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
          }`}
        >
          {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {trend}
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-3">{value}</div>
      <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
        <polyline
          points="0,30 10,25 20,28 30,20 40,22 50,15 60,18 70,12 80,16 90,10 100,8"
          fill="none"
          stroke={positive ? "#10b981" : "#ef4444"}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

export function MetricsGrid({ activeAgent }: MetricsGridProps) {
  const metrics = metricsConfig[activeAgent as keyof typeof metricsConfig]

  return (
    <div className="grid grid-cols-6 gap-4 mb-6">
      {metrics.map((metric, idx) => (
        <MetricCard key={idx} {...metric} />
      ))}
    </div>
  )
}
