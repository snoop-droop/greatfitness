"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div style={container}>
      
      {/* HERO */}
      <section style={hero}>
        <h1 style={title}>GREATFITNESS</h1>
        <p style={subtitle}>
          Build muscle. Lose fat. Stay consistent.
        </p>

        <div style={buttons}>
          <button style={primaryBtn} onClick={() => router.push("/dashboard")}>
            Go to Dashboard
          </button>

          <button style={secondaryBtn} onClick={() => router.push("/login")}>
            Login
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section style={features}>
        <div style={card}>
          <h3>🏋️ Workouts</h3>
          <p>Track and explore exercises by muscle group</p>
        </div>

        <div style={card}>
          <h3>🔥 Calories</h3>
          <p>Monitor your daily intake and goals</p>
        </div>

        <div style={card}>
          <h3>📈 Progress</h3>
          <p>Stay consistent and track improvements</p>
        </div>
      </section>

    </div>
  );
}

const container = {
  minHeight: "100vh",
  background: "#0b1220",
  color: "#e5e7eb",
  padding: "40px",
};

const hero = {
  textAlign: "center" as const,
  marginBottom: "60px",
};

const title = {
  fontSize: "48px",
  fontWeight: "bold",
  color: "#22d3ee",
};

const subtitle = {
  marginTop: "10px",
  color: "#94a3b8",
};

const buttons = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

const primaryBtn = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "none",
  background: "#22d3ee",
  fontWeight: "bold",
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid #22d3ee",
  background: "transparent",
  color: "#22d3ee",
  cursor: "pointer",
};

const features = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  flexWrap: "wrap" as const,
};

const card = {
  background: "#111a2e",
  padding: "20px",
  borderRadius: "12px",
  width: "250px",
  border: "1px solid #1f2a44",
};