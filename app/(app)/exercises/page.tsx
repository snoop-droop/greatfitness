"use client";

import Link from "next/link";

const muscles = ["biceps", "chest", "back", "legs"];

export default function ExercisesPage() {
  return (
    <div>
      <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>
        Exercises
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
        Select a muscle group
      </p>

      <div style={{ display: "grid", gap: "15px" }}>
        {muscles.map((m) => (
          <Link key={m} href={`/exercises/${m}`}>
            <div
              style={{
                padding: "15px",
                background: "#111a2e",
                border: "1px solid #1f2a44",
                borderRadius: "12px",
                cursor: "pointer",
                textTransform: "capitalize",
                color: "#22d3ee",
              }}
            >
              {m}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}