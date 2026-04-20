"use client";

import Sidebar from "@/app/components/Sidebar";
import LogoutButton from "@/app/components/LogoutButton";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0b1220" }}>
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main style={{ flex: 1, padding: "20px" }}>
        
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            padding: "10px 15px",
            background: "#111a2e",
            borderRadius: "12px",
            border: "1px solid #1f2a44",
          }}
        >
          <h3 style={{ margin: 0, color: "#22d3ee" }}>
            GREATFITNESS
          </h3>

          <LogoutButton />
        </div>

        {children}
      </main>
    </div>
  );
}