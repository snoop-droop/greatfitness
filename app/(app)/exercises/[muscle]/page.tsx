import { exercises } from "../data";

export default async function MusclePage({
  params,
}: {
  params: Promise<{ muscle: string }>;
}) {
  const { muscle } = await params;

  const cleanMuscle = muscle.toLowerCase();

  console.log("muscle:", cleanMuscle);

  const list = exercises[cleanMuscle as keyof typeof exercises];

  console.log("list:", list);

  if (!list) {
    return (
      <div>
        <h2>❌ No exercises found for {cleanMuscle}</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>
        {cleanMuscle.toUpperCase()} Exercises
      </h1>

      <div style={{ display: "grid", gap: "12px" }}>
        {list.map((ex, i) => (
          <div
            key={i}
            style={{
              padding: "14px",
              background: "#111a2e",
              border: "1px solid #1f2a44",
              borderRadius: "12px",
              color: "#e2e8f0",
            }}
          >
            💪 {ex}
          </div>
        ))}
      </div>
    </div>
  );
}