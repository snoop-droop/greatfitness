"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [muscle, setMuscle] = useState("");

  function goToExercises() {
    if (!muscle) return;
    router.push(`/exercises/${muscle}`);
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>
        Overview
      </h1>

      {/* STATS */}
      <div style={grid}>
        <div style={card}>
          <p style={label}>🔥 Calories</p>
          <h2 style={value}>2200 kcal</h2>
        </div>

        <div style={card}>
          <p style={label}>🏋️ Workouts</p>
          <h2 style={value}>5 sessions</h2>
        </div>

        <div style={card}>
          <p style={label}>⚖️ Weight</p>
          <h2 style={value}>85 kg</h2>
        </div>
      </div>

      {/* EXERCISES */}
      <div style={{ marginTop: "40px" }}>
        <h2>Explore Exercises</h2>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <select
            value={muscle}
            onChange={(e) => setMuscle(e.target.value)}
            style={input}
          >
            <option value="">Select muscle</option>
            <option value="biceps">Biceps</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="legs">Legs</option>
            <option value="shoulders">Shoulders</option>
            <option value="abs">Abs</option>
          </select>

          <button onClick={goToExercises} style={button}>
            View
          </button>
        </div>
      </div>
    </main>
  );
}

/* styles */

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const card: React.CSSProperties = {
  background: "#0f172a",
  border: "1px solid #1e293b",
  borderRadius: "16px",
  padding: "20px",
};

const label: React.CSSProperties = {
  color: "#94a3b8",
};

const value: React.CSSProperties = {
  fontSize: "20px",
};

const input: React.CSSProperties = {
  padding: "10px",
  background: "#020617",
  color: "white",
  border: "1px solid #1e293b",
  borderRadius: "8px",
};

const button: React.CSSProperties = {
  padding: "10px 16px",
  background: "#22d3ee",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};