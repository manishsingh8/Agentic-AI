import { Plus } from "lucide-react";

type Agent = "rcm" | "intake" | "reconciliation" | "posting";

interface WorkflowDiagramProps {
  agent: Agent;
}

interface Node {
  id: string;
  label: string;
  level: number;
}

export function WorkflowDiagram({ agent }: WorkflowDiagramProps) {
  const getWorkflowNodes = (agent: Agent): Node[] => {
    switch (agent) {
      case "rcm":
        return [
          { id: "rcm", label: "RCM Maestro Agent", level: 0 },
          { id: "intake", label: "Intake Orchestrator Agent", level: 1 },
          { id: "recon", label: "Reconciliation Agent", level: 1 },
          { id: "posting", label: "Cash Posting Agent", level: 1 },
        ];
      case "intake":
        return [
          { id: "intake", label: "Intake Orchestrator Agent", level: 0 },
          { id: "bai", label: "BAI Agent", level: 1 },
          { id: "edi", label: "EDI Parser Agent", level: 1 },
          { id: "corr", label: "Correspondence Agent", level: 1 },
          { id: "cp", label: " Validator Agent", level: 1 },
        ];
      case "posting":
        return [
          { id: "posting", label: "Cash Posting Agent", level: 0 },
          { id: "cp1", label: "CP for EMR1", level: 1 },
          { id: "cp2", label: "CP for EMR2", level: 1 },
          { id: "cp3", label: "CP for EMR3", level: 1 },
          { id: "cpn", label: "CP for EMRn", level: 1 },
        ];
      case "reconciliation":
        return [
          { id: "recon", label: "Reconciliation Agent", level: 0 },
          { id: "smart", label: "Smart Matcher Agent", level: 1 },
          { id: "except", label: "Exception Finder Agent", level: 1 },
          { id: "queue", label: "Posting Queue Generator Agent", level: 1 },
          { id: "valid", label: "Validator Agent", level: 1 },
        ];
    }
  };

  const nodes = getWorkflowNodes(agent);
  const mainNode = nodes[0];
  const childNodes = nodes.slice(1);

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      {/* Main Agent Node */}
      <div className="flex justify-center mb-12 relative w-[500px] h-[80px] rounded-[24px] ml-12 rounded-3xl ">
        <div className="flex justify-center bg-white border-2 border-gray-200 rounded-2xl px-8 py-4 shadow-sm flex items-center gap-3 w-[100%] relative overflow-hidden">
          <span className="font-semibold text-gray-900">{mainNode.label}</span>
          <img
            src="/logo-icon.jpeg"
            alt="Agent info"
            className="w-7 h-8 animate-spin"
          />
          <button className="absolute -top-[1px] -right-[2px] bg-[#249563] text-white  w-7 h-7 flex items-center justify-center hover:bg-green-600 rounded-[4px]">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Connection Lines */}

      {/* Child Nodes */}
      <div className="flex justify-between gap-4 mt-16 mb-8 w-[100%]">
        {childNodes.map((node) => (
          <div key={node.id} className="flex flex-col items-center">
            <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-4 shadow-sm w-[100%] h-[80px] text-center relative overflow-hidden min-w-[200px]">
              <span className="font-semibold text-gray-900 text-sm">
                {node.label}
              </span>
              <button className="absolute -top-1 -right-1 bg-[#249563] text-white  w-7 h-7 flex items-center justify-center hover:bg-green-600 rounded-[4px]">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {/* Connection line down */}
            <div className="w-0.5 h-12 bg-gray-300 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
