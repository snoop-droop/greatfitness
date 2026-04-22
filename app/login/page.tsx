"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    //  Redirect to homepage
    window.location.href = "/";
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0b1220",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#111a2e",
          padding: "30px",
          borderRadius: "16px",
          border: "1px solid #1f2a44",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#22d3ee" }}>
          GREATFITNESS
        </h2>

        <p style={{ textAlign: "center", color: "#94a3b8" }}>
          Sign in to continue
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button style={buttonStyle}>LOGIN</button>
        </form>
      </div>
    </main>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #1f2a44",
  background: "#0b1220",
  color: "#e5e7eb",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "#22d3ee",
  fontWeight: "bold",
  cursor: "pointer",
};