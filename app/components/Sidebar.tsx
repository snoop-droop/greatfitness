"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  function active(route: string) {
    return path === route ? { color: "#22d3ee" } : {};
  }

  return (
    <aside
      style={{
        width: "220px",
        background: "#020617",
        padding: "20px",
        borderRight: "1px solid #1e293b",
        minHeight: "100vh",
      }}
    >
      {/* LOGO */}
      <Link href="/dashboard" style={{ textDecoration: "none" }}>
        <h2 style={{ color: "#22d3ee", cursor: "pointer" }}>
          GREATFITNESS
        </h2>
      </Link>

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <Link href="/dashboard" style={active("/dashboard")}>
          Dashboard
        </Link>

        <Link href="/trainer" style={active("/trainer")}>
          AI Trainer
        </Link>

        <Link href="/yoga" style={active("/yoga")}>
          Yoga
        </Link>

        <Link href="/meditation" style={active("/meditation")}>
          Meditation
        </Link>

        <Link href="/calories" style={active("/calories")}>
          Calories
        </Link>

        <Link href="/exercises" style={active("/exercises")}>
          Exercises
        </Link>
      </nav>
    </aside>
  );
}