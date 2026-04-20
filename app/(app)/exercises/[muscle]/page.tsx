export default function ExercisePage({
  params,
}: {
  params: { muscle?: string };
}) {
  // ✅ SAFE ACCESS
  const muscle = params?.muscle?.toLowerCase();

  if (!muscle) {
    return <h1>No muscle selected</h1>;
  }

  const exercises: Record<string, string[]> = {
    biceps: ["Bicep Curls", "Hammer Curls", "Preacher Curls"],
    chest: ["Push Ups", "Bench Press", "Chest Fly"],
    back: ["Pull Ups", "Deadlift", "Rows"],
    legs: ["Squats", "Lunges", "Leg Press"],
    shoulders: ["Shoulder Press", "Lateral Raises"],
    abs: ["Crunches", "Plank"],
  };

  const list = exercises[muscle];

  if (!list) {
    return <h1>No exercises found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{muscle.toUpperCase()} EXERCISES</h1>

      <ul>
        {list.map((ex, i) => (
          <li key={i}>{ex}</li>
        ))}
      </ul>
    </div>
  );
}