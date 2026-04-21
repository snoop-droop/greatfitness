"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setError("");

  try {
    const res = await fetch("http://127.0.0.1/greatfitness-api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    console.log("API RESPONSE:", data); // IMPORTANT

    if (data.success) {
      window.location.href = "/dashboard";
    } else {
      setError(data.error || "Invalid email or password");
    }
  } catch (err) {
    console.error(err);
    setError("Cannot connect to server");
  }
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
      {/* CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#111a2e",
          padding: "30px",
          borderRadius: "16px",
          border: "1px solid #1f2a44",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        {/* TITLE */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "5px",
            color: "#22d3ee",
          }}
        >
          GREATFITNESS
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "25px",
            fontSize: "14px",
          }}
        >
          Sign in to your fitness dashboard
        </p>

        {error && (
          <p
            style={{
              color: "#ef4444",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            {error}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
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

          <button style={buttonStyle}>
            LOGIN
          </button>
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
  outline: "none",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "#22d3ee",
  fontWeight: "bold",
  cursor: "pointer",
};