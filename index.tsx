import React from "react"
import ReactDOM from "react-dom/client"
import { AgentDashboard } from "./components/agent-dashboard"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AgentDashboard />
  </React.StrictMode>,
)
