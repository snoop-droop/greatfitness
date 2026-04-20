"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard" },
    { name: "AI Trainer", href: "/trainer" },
    { name: "Yoga", href: "/yoga" },
    { name: "Meditation", href: "/meditation" },
    { name: "Exercises", href: "/exercises" },
    { name: "Nutrition", href: "/calories" },
  ];

  return (
    <aside
      style={{
        width: "240px",
        background: "#020617",
        borderRight: "1px solid #1e293b",
        padding: "20px",
      }}
    >
      {/* LOGO */}
      <h2 style={{ color: "#22d3ee", marginBottom: "30px" }}>
        GREATFITNESS
      </h2>

      {/* NAV */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            style={{
              padding: "10px 14px",
              borderRadius: "10px",
              textDecoration: "none",
              color: path === item.href ? "#22d3ee" : "#cbd5f5",
              background: path === item.href ? "#0f172a" : "transparent",
              transition: "0.2s",
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}