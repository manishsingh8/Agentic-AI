import {
  Database,
  Code,
  FileText,
  Zap,
  Search,
  Users,
  Triangle,
} from "lucide-react";

export function AgentTools() {
  const tools = [
    { id: "db", label: "DB", icon: "/database.svg" },
    { id: "api", label: "API", icon: "/api.svg", color: "text-blue-500" },
    {
      id: "audit",
      label: "Audit Log",
      icon: "/audit.svg",
      color: "text-orange-500",
    },
    {
      id: "logs",
      label: "Agent Logs",
      icon: "/agent.svg",
      color: "text-yellow-500",
    },
    {
      id: "search",
      label: "Elastic Search",
      icon: "/elastic.svg",
      color: "text-teal-500",
    },
    {
      id: "services",
      label: "Services",
      icon: "/services.svg",
      color: "text-gray-500",
    },
    { id: "vault", label: "Vault", icon: "/vault.svg", color: "text-red-500" },
  ];

  return (
    <div className="rounded-3xl shadow-md p-4 border border-white bg-[rgba(255,255,255,.3)]">
      <div className="flex justify-center items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Agent Tools</h3>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <img src={tool.icon} alt={tool.label} className="w-6 h-6" />
            <span className="text-sm font-medium text-gray-700 text-center">
              {tool.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
