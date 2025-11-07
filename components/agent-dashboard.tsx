"use client";

import { useState } from "react";
import { MetricCard } from "./metric-card";
import { WorkflowDiagram } from "./workflow-diagram";
import { AgentTools } from "./agent-tools";
import { Header } from "./header";
import { TabsSection } from "./tabs-section";
import { Sidebar } from "./sidebar";
import { RightSidebar } from "./right-sidebar";
import { InsightAgent } from "./insight-agent";

type Agent = "rcm" | "intake" | "reconciliation" | "posting";

export function AgentDashboard() {
  const [activeAgent, setActiveAgent] = useState<Agent>("rcm");

  const getMetricsForAgent = (agent: Agent) => {
    switch (agent) {
      case "rcm":
        return [
          {
            label: "Files Ingested",
            value: "126",
            change: "+3.5",
            color: "green",
          },
          { label: "Docs Parsed", value: "118", change: "+8", color: "green" },
          { label: "BAI", value: "12", change: "+1.2", color: "orange" },
          { label: "EDI 835", value: "34", change: "+3.5", color: "green" },
          { label: "EOB", value: "52", change: "+6.8", color: "green" },
          { label: "EDI 837", value: "9", change: "-7.8", color: "red" },
        ];
      case "intake":
        return [
          {
            label: "Files Ingested",
            value: "126",
            change: "+3.5",
            color: "green",
          },
          {
            label: "Docs Parsed",
            value: "118",
            change: "+3.2",
            color: "green",
          },
          { label: "BAI", value: "12", change: "+1.2", color: "orange" },
          { label: "EDI 835", value: "34", change: "+3.5", color: "green" },
          { label: "EOB", value: "52", change: "-6.8", color: "red" },
          { label: "EDI 837", value: "9", change: "-7.8", color: "red" },
        ];
      case "posting":
        return [
          {
            label: "Post Ready Amount",
            value: "820345.55",
            change: "+15",
            color: "green",
          },
          {
            label: "Post Ready Count",
            value: "311",
            change: "+8.8",
            color: "green",
          },
          {
            label: "Posted Amount",
            value: "612441.22",
            change: "-1.8",
            color: "orange",
          },
          {
            label: "Posted Count",
            value: "221",
            change: "+3.5",
            color: "green",
          },
          { label: "Failures", value: "8", change: "-6.8", color: "red" },
        ];
      case "reconciliation":
        return [
          {
            label: "Total Candidates",
            value: "684",
            change: "+5.5",
            color: "green",
          },
          {
            label: "Reconciled Count",
            value: "512",
            change: "+5.8",
            color: "green",
          },
          {
            label: "Matched Amount",
            value: "1450236...",
            change: "+1.2",
            color: "orange",
          },
          {
            label: "Unmatched Amount",
            value: "281902.11",
            change: "+3.3",
            color: "green",
          },
          {
            label: "Partial Match Amount",
            value: "90612.88",
            change: "+6.2",
            color: "green",
          },
          {
            label: "Variance ABS",
            value: "1211.77",
            change: "-7.8",
            color: "red",
          },
        ];
    }
  };

  const metrics = getMetricsForAgent(activeAgent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <TabsSection activeAgent={activeAgent} onAgentChange={setActiveAgent} />

      <div className="flex">
        <div className="flex-1 p-6">
          {/* Metrics Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              marginBottom: "20px",
              gap: "20px",
            }}
          >
            {metrics.map((metric, idx) => (
              <MetricCard key={idx} {...metric} />
            ))}
          </div>

          {/* Workflow Section */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-around",
              backgroundColor: "#3333330D",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <div style={{ width: "10%" }}>
              <Sidebar agent={activeAgent} />
            </div>
            <div style={{ width: "80%" }}>
              <div>
                <WorkflowDiagram agent={activeAgent} />
              </div>

              {/* Agent Tools Section */}
              <div className="mt-8">
                <AgentTools />
              </div>

              <InsightAgent />
            </div>
            <div
              style={{
                width: "13%",
                marginTop: "100px",
                display: "flex",
                justifyContent: "end",
              }}
            >
              {(activeAgent === "rcm" || activeAgent === "intake") && (
                <RightSidebar />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
