"use client";

import { Settings, Bell, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpeg"
            alt="INNOCLIQUE Logo"
            className="h-12 object-contain"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
          <Settings className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              JS
            </div>
            <span className="text-sm text-gray-700">John Summit</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
