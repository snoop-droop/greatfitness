export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const prompt = `
You are a professional yoga instructor.

Create a simple yoga routine.

User request: ${message}

Rules:
- Keep it short
- Use bullet points
- Beginner friendly unless specified

Format:

Goal:
Warm-up:
- Pose 1
- Pose 2

Main Flow:
- Pose (duration)

Cool Down:
- Pose

Breathing Tips:
- Tip 1
`;

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

    return Response.json({
      reply: data.response || "No response",
    });

  } catch (error) {
    console.error("YOGA ERROR:", error);

    return Response.json({
      reply: "Yoga trainer failed.",
    });
  }
}