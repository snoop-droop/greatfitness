export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const prompt = `
You are a calm and professional meditation guide.

Create a simple guided meditation.

User request: ${message}

Rules:
- Keep it peaceful and clear
- Short instructions
- Beginner friendly

Format:

Goal:
Preparation:
- Step 1

Meditation Steps:
- Step 1
- Step 2

Breathing:
- Instruction

Closing Tip:
- Tip
`;

    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "phi3",
        prompt,
        stream: false,
      }),
    });

    const data = await res.json();

    return Response.json({
      reply: data.response || "No response",
    });

  } catch (error) {
    console.error("MEDITATION ERROR:", error);

    return Response.json({
      reply: "Meditation trainer failed.",
    });
  }
}