"use client";

import Link from "next/link";
import styles from "../trainer/trainer.module.scss";

export default function ExercisesHome() {
  const muscles = [
    "biceps",
    "chest",
    "back",
    "legs",
    "shoulders",
    "abs",
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🏋️ Exercise Library</h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#94a3b8",
        }}
      >
        Choose a muscle group to explore exercises
      </p>

      {/* GRID */}
      <div style={cardGrid}>
        {muscles.map((m) => (
          <Link key={m} href={`/exercises/${m}`} style={card}>
            <div>
              <h2 style={cardTitle}>{m.toUpperCase()}</h2>
              <p style={cardSub}>View exercises →</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

/* ✅ STYLE OBJECTS (used with style={}, NOT className) */

const cardGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "20px",
  width: "100%",
};

const card: React.CSSProperties = {
  background: "#0f172a",
  border: "1px solid #1e293b",
  borderRadius: "16px",
  padding: "20px",
  cursor: "pointer",
  textDecoration: "none",
  color: "white",
  transition: "all 0.2s ease",
};

const cardTitle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 600,
};

const cardSub: React.CSSProperties = {
  marginTop: "10px",
  fontSize: "14px",
  color: "#22d3ee",
};