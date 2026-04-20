import { exercises } from "../data";

export default async function MusclePage({
  params,
}: {
  params: Promise<{ muscle: string }>;
}) {
  const { muscle } = await params;

  const cleanMuscle = muscle.toLowerCase();

  const list = exercises[cleanMuscle as keyof typeof exercises];

  if (!list) {
    return (
      <div>
        <h2 style={{ color: "#f87171" }}>
           No exercises found for {cleanMuscle}
        </h2>
      </div>
    );
  }

  return (
    <div>
      {/* TITLE */}
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "25px",
          color: "#22d3ee",
          textTransform: "uppercase",
        }}
      >
        {cleanMuscle} WORKOUT
      </h1>

      {/* GRID */}
      <div style={{ display: "grid", gap: "16px" }}>
        {list.map((ex, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "15px",
              background: "#111a2e",
              border: "1px solid #1f2a44",
              borderRadius: "14px",
            }}
          >
            {/* GIF */}
            <img
              src={ex.gif}
              alt={ex.name}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "10px",
                objectFit: "cover",
                border: "1px solid #1f2a44",
              }}
            />

            {/* TEXT */}
            <div>
              <h3 style={{ margin: 0, color: "#e2e8f0" }}>
                 {ex.name}
              </h3>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px" }}>
                Muscle activation exercise
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}