export async function POST(req: Request) {
  try {
    const { message, mode } = await req.json();

    let prompt = "";

    // 🧠 Optimized prompts for SMALL models like phi3
    if (mode === "workout") {
      prompt = `
You are a professional fitness trainer.

Create a simple and clear workout plan.

User request: ${message}

Rules:
- Keep it short
- Use bullet points
- No long paragraphs

Format:
Goal:
Workout Plan:
- Exercise 1 (sets x reps)
- Exercise 2 (sets x reps)

Tips:
- Tip 1
- Tip 2
`;
    } else {
      prompt = `
You are a helpful gym trainer.

Answer briefly and clearly.

User: ${message}

Rules:
- Keep answer under 6 lines
- Be practical
- No long explanations
`;
    }

    // 🚀 OLLAMA CALL (phi3)
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "phi3",
        prompt: prompt,
        stream: false,
      }),
    });

    const data = await res.json();

    if (!data.response) {
      return Response.json({
        reply: "Trainer couldn't generate a response.",
      });
    }

    return Response.json({
      reply: data.response.trim(),
    });

  } catch (error) {
    console.error("TRAINER ERROR:", error);

    return Response.json({
      reply: "Something went wrong with the trainer.",
    });
  }
}