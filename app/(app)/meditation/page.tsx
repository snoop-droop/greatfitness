"use client";

import { useState, useRef, useEffect } from "react";
import styles from "../trainer/trainer.module.scss"; // reuse trainer styles

export default function MeditationTrainer() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ from: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
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
      const res = await fetch("/api/meditation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setChat((prev) => [
        ...prev,
        { from: "MEDITATION GUIDE", text: data.reply },
      ]);
    } catch {
      setChat((prev) => [
        ...prev,
        { from: "MEDITATION GUIDE", text: "Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}> AI MEDITATION GUIDE</h1>

      {/* Chat Window */}
      <div className={styles.chatWindow}>
        {chat.map((msg, i) => (
          <p
            key={i}
            className={
              msg.from === "YOU" ? styles.userMsg : styles.trainerMsg
            }
          >
            <strong>{msg.from}:</strong> {msg.text}
          </p>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <form className={styles.form} onSubmit={sendMessage}>
        <input
          className={styles.inputField}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask for meditation guidance..."
        />

        <button
          type="submit"
          className={styles.sendButton}
          disabled={loading}
        >
          {loading ? "Loading..." : "SEND"}
        </button>
      </form>
    </main>
  );
}