export default function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Dashboard Overview
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <Card title=" Calories Burned" value="2200 kcal" />
        <Card title=" Workouts" value="5 this week" />
        <Card title=" Weight" value="85 kg" />
        <Card title=" Protein Intake" value="120g" />
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div
      style={{
        background: "#111a2e",
        padding: "20px",
        borderRadius: "14px",
        border: "1px solid #1f2a44",
      }}
    >
      <p style={{ color: "#94a3b8", marginBottom: "8px" }}>{title}</p>
      <h2 style={{ color: "#22d3ee" }}>{value}</h2>
    </div>
  );
}