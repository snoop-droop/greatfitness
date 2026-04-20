"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  const linkStyle = (active: boolean) => ({
    padding: "10px 12px",
    borderRadius: "10px",
    textDecoration: "none",
    color: active ? "#22d3ee" : "#cbd5e1",
    background: active ? "#0f172a" : "transparent",
    display: "block",
    marginBottom: "8px",
    transition: "0.2s",
    fontSize: "15px",
    fontWeight: active ? "600" : "400",
  });

  return (
    <aside
      style={{
        width: "240px",
        background: "#020617",
        padding: "25px 20px",
        borderRight: "1px solid #1e293b",
        minHeight: "100vh",
      }}
    >
      {/* LOGO (HOME BUTTON) */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <h2
          style={{
            color: "#22d3ee",
            fontSize: "20px",
            marginBottom: "30px",
            cursor: "pointer",
          }}
        >
          GREATFITNESS 💪
        </h2>
      </Link>

      {/* NAV LINKS */}
      <nav>
        <Link href="/dashboard" style={linkStyle(path === "/dashboard")}>
          Dashboard
        </Link>

        <Link href="/trainer" style={linkStyle(path === "/trainer")}>
          AI Trainer
        </Link>

        <Link href="/yoga" style={linkStyle(path === "/yoga")}>
          Yoga
        </Link>

        <Link href="/meditation" style={linkStyle(path === "/meditation")}>
          Meditation
        </Link>

        <Link href="/calories" style={linkStyle(path === "/calories")}>
          Calories
        </Link>

        <Link href="/exercises" style={linkStyle(path === "/exercises")}>
          Exercises
        </Link>
      </nav>
    </aside>
  );
}