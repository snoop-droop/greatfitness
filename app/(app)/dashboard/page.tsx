export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>
        Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <Card title="🔥 Calories" value="2200 kcal" />
        <Card title="🏋️ Workouts" value="5 this week" />
        <Card title="⚖️ Weight" value="85 kg" />
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "20px",
        borderRadius: "14px",
        border: "1px solid #1e293b",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      }}
    >
      <p style={{ color: "#94a3b8", marginBottom: "8px" }}>{title}</p>
      <h2 style={{ fontSize: "20px", color: "#22d3ee" }}>{value}</h2>
    </div>
  );
}