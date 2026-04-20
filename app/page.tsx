import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#020617",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px"
    }}>
      <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#22d3ee" }}>
        GREAT-FITNESS WEBSITE 
      </h1>

      <p style={{ color: "#94a3b8", maxWidth: "500px", textAlign: "center" }}>
        Your personal fitness companion. Track workouts, calories, and build a better body.
      </p>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/login">
          <button style={btn}>Login</button>
        </Link>

        <Link href="/dashboard">
          <button style={btnOutline}>Go to App</button>
        </Link>
      </div>
    </main>
  );
}

const btn = {
  background: "#22d3ee",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

const btnOutline = {
  background: "transparent",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "1px solid #22d3ee",
  color: "#22d3ee",
  cursor: "pointer",
};