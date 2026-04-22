"use client";

import { useState } from "react";
import styles from "../trainer/trainer.module.scss";

export default function NutritionCalculator() {
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState<any>(null);

  function calculate() {
    const w = parseFloat(weight);
    if (!w) return;

    let calories = 0;
    let protein = 0;

    // Simple formulas
    if (goal === "fatloss") {
      calories = w * 22;
      protein = w * 1.8;
    } else if (goal === "muscle") {
      calories = w * 30;
      protein = w * 2.2;
    } else {
      calories = w * 26;
      protein = w * 1.6;
    }

    setResult({
      calories: Math.round(calories),
      protein: Math.round(protein),
    });
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}> Nutrition Calculator</h1>

      {/* FORM CARD */}
      <div className={styles.chatWindow}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          
          <input
            className={styles.inputField}
            type="number"
            placeholder="Enter weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <select
            className={styles.inputField}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="fatloss">Fat Loss</option>
            <option value="maintain">Maintain</option>
            <option value="muscle">Muscle Gain</option>
          </select>

          <button className={styles.sendButton} onClick={calculate}>
            CALCULATE
          </button>
        </div>
      </div>

      {result && (
        <div className={styles.chatWindow}>
          <p><strong>Calories:</strong> {result.calories} kcal/day</p>
          <p><strong>Protein:</strong> {result.protein} g/day</p>
        </div>
      )}
    </main>
  );
}