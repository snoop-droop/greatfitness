import LogoutButton from "@/app/components/LogoutButton";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={{
        width: "220px",
        background: "#020617",
        padding: "20px",
        borderRight: "1px solid #1e293b"
      }}>
        <h2 style={{ color: "#22d3ee" }}>GREATFITNESS</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
          <a href="/dashboard">Dashboard</a>
          <a href="/trainer">AI Trainer</a>
          <a href="/yoga">Yoga</a>
        </nav>
      </aside>

      {/* Main */}
      <main style={{ flex: 1 }}>
        
        {/* Navbar */}
        <header style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          borderBottom: "1px solid #1e293b"
        }}>
          <h3>Welcome Back </h3>

          <LogoutButton />
        </header>

        {/* Page Content */}
        <div style={{ padding: "20px" }}>
          {children}
        </div>

      </main>
    </div>
  );
}