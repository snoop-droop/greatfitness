"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  const link = (active: boolean) => ({
    display: "block",
    padding: "10px 12px",
    marginBottom: "8px",
    borderRadius: "10px",
    background: active ? "#111a2e" : "transparent",
    color: active ? "#22d3ee" : "#94a3b8",
    border: active ? "1px solid #1f2a44" : "1px solid transparent",
  });

  return (
    <aside
      style={{
        width: "240px",
        padding: "20px",
        background: "#0b1220",
        borderRight: "1px solid #1f2a44",
      }}
    >
      <Link href="/">
        <h2 style={{ color: "#22d3ee", marginBottom: "30px" }}>
          GREATFITNESS
        </h2>
      </Link>

      <nav>
        <Link href="/dashboard" style={link(path === "/dashboard")}>
          Dashboard
        </Link>

        <Link href="/exercises" style={link(path === "/exercises")}>
          Exercises
        </Link>

        <Link href="/trainer" style={link(path === "/trainer")}>
          AI Trainer
        </Link>

        <Link href="/yoga" style={link(path === "/yoga")}>
          Yoga
        </Link>

        <Link href="/calories" style={link(path === "/calories")}>
          Calories
        </Link>
      </nav>
    </aside>
  );
}