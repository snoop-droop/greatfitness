"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./trainer.module.scss";

export default function AITrainer() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ from: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"chat" | "workout">("chat");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    setChat((prev) => [...prev, { from: "YOU", text: message }]);
    const userMessage = message;
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/trainer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, mode }),
      });
      const data = await res.json();
      setChat((prev) => [...prev, { from: "TRAINER", text: data.reply }]);
    } catch {
      setChat((prev) => [
        ...prev,
        { from: "TRAINER", text: "Oops! Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  }

 return (
  <main className={styles.container}>
    
    {/* CARD WRAPPER */}
    <div className={styles.card}>
      
      <h1 className={styles.title}>AI PERSONAL TRAINER</h1>

      {/* MODE SWITCH */}
      <div className={styles.modeSwitch}>
        <button
          onClick={() => setMode("chat")}
          className={mode === "chat" ? styles.activeBtn : styles.inactiveBtn}
        >
          Chat Mode
        </button>

        <button
          onClick={() => setMode("workout")}
          className={mode === "workout" ? styles.activeBtn : styles.inactiveBtn}
        >
          Workout Plan
        </button>
      </div>

      {/* CHAT WINDOW */}
      <div className={styles.chatWindow}>
        {chat.map((msg, i) => (
          <p
            key={i}
            className={msg.from === "YOU" ? styles.userMsg : styles.trainerMsg}
          >
            <strong>{msg.from}:</strong> {msg.text}
          </p>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* INPUT */}
      <form className={styles.form} onSubmit={sendMessage}>
        <input
          className={styles.inputField}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            mode === "chat"
              ? "Ask your trainer..."
              : "Describe your fitness goals..."
          }
        />

        <button
          type="submit"
          className={styles.sendButton}
          disabled={loading}
        >
          {loading ? "Loading..." : "Send"}
        </button>
      </form>

    </div>
  </main>
);
}