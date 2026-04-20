export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      
      <h1 style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
        Welcome to GreatFitness 💪
      </h1>

      <p style={{ color: "#94a3b8", fontSize: "1.1rem" }}>
        Your all-in-one AI fitness platform for workouts, yoga, and progress tracking.
      </p>

      <div style={{ marginTop: "30px" }}>
        <a href="/dashboard">
          <button style={{ marginRight: "10px" }}>
            Go to Dashboard
          </button>
        </a>

        <a href="/trainer">
          <button>
            Try AI Trainer
          </button>
        </a>
      </div>

      {/* FEATURES */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "80px",
        flexWrap: "wrap"
      }}>
        
        <div style={card}>
          <h3>🤖 AI Trainer</h3>
          <p>Get personalized workouts instantly</p>
        </div>

        <div style={card}>
          <h3>📊 Dashboard</h3>
          <p>Track your fitness progress easily</p>
        </div>

        <div style={card}>
          <h3>🧘 Yoga</h3>
          <p>Improve flexibility and relax</p>
        </div>

      </div>

    </div>
  );
}

const card = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "12px",
  width: "220px",
};