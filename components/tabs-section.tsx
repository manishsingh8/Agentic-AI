"use client";

import { ChevronDown } from "lucide-react";

type Agent = "rcm" | "intake" | "reconciliation" | "posting";

interface TabsSectionProps {
  activeAgent: Agent;
  onAgentChange: (agent: Agent) => void;
}

export function TabsSection({ activeAgent, onAgentChange }: TabsSectionProps) {
  const agents = [
    { id: "rcm", label: "RCM Maestro Agent" },
    { id: "intake", label: "Intake Orchestrator Agent" },
    { id: "reconciliation", label: "Reconciliation Agent" },
    { id: "posting", label: "Cash Posting Agent" },
  ] as const;

  return (
    <div className="flex justify-end px-6 py-4">
      <div className="flex items-center justify-between w-[70%]">
        {/* Tabs */}
        <div className="flex gap-2">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => onAgentChange(agent.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors cursor-pointer ${
                activeAgent === agent.id
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={{
                backgroundColor:
                  activeAgent === agent.id ? "#249563" : "transparent",
              }}
            >
              {agent.label}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-1 px-3 py-1 text-gray-700 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors">
          <span>1 Week</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
