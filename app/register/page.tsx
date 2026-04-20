"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Registered successfully!");
      window.location.href = "/login";
    } else {
      alert("Registration failed");
    }
  };

  return (
    <main suppressHydrationWarning className="min-h-screen bg-black text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 w-96">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Join GreatFitness
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-2 text-black bg-white"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 text-black bg-white"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 text-black bg-white"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-red-600 py-2 font-bold hover:bg-red-700">
          REGISTER
        </button>
      </form>
    </main>
  );
}