export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Dashboard
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        <Card title="🔥 Calories" value="2200 kcal" />
        <Card title="🏋️ Workouts" value="5 this week" />
        <Card title="⚖️ Weight" value="85 kg" />
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div style={{
      background: "#0f172a",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #1e293b"
    }}>
      <p style={{ color: "#94a3b8" }}>{title}</p>
      <h2 style={{ fontSize: "22px", marginTop: "10px" }}>{value}</h2>
    </div>
  );
}