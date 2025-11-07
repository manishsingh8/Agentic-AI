import type React from "react";
import { Clock, Settings, Mail, Zap, Cloud, Users } from "lucide-react";

type Agent = "rcm" | "intake" | "reconciliation" | "posting";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SidebarGroup {
  box1: SidebarItem[];
  box2: SidebarItem[];
}

const SIDEBAR_ITEMS: Record<Agent, SidebarGroup> = {
  rcm: {
    box1: [
      { id: "scheduler", label: "Scheduler", icon: "/scheduler.svg" },
      { id: "config", label: "Config", icon: "/config.svg" },
    ],
    box2: [
      { id: "inbox", label: "Inbox", icon: "/inbox.svg" },
      { id: "sftp", label: "SFTP", icon: "/sftp.svg" },
      { id: "s3", label: "Amazon S3", icon: "/amazon.svg" },
    ],
  },
  intake: {
    box1: [{ id: "config", label: "Config", icon: Settings }],
    box2: [
      { id: "inbox", label: "Inbox", icon: Mail },
      { id: "sftp", label: "SFTP", icon: Zap },
      { id: "s3", label: "Amazon S3", icon: Cloud },
    ],
  },
  reconciliation: {
    box1: [{ id: "config", label: "Config", icon: Settings }],
    box2: [
      { id: "inbox", label: "Inbox", icon: Mail },
      { id: "sftp", label: "SFTP", icon: Zap },
    ],
  },
  posting: {
    box1: [{ id: "config", label: "Config", icon: Settings }],
    box2: [
      { id: "emr1", label: "EMR 1", icon: Users },
      { id: "emr2", label: "EMR 2", icon: Users },
      { id: "emrn", label: "EMR n", icon: Users },
    ],
  },
};

interface SidebarProps {
  agent: Agent;
}

function SidebarBox({ items }: { items: SidebarItem[] }) {
  return (
    <div className="bg-[rgba(255,255,255,.3)] rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col items-center gap-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity w-full bg-white p-3 rounded-xl"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center hover:from-blue-200 hover:to-blue-100 transition shadow-sm">
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-gray-700 text-center">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function Sidebar({ agent }: SidebarProps) {
  const { box1, box2 } = SIDEBAR_ITEMS[agent];

  return (
    <div className="w-32 flex flex-col gap-6 py-6 px-2">
      <SidebarBox items={box1} />
      <SidebarBox items={box2} />
    </div>
  );
}
