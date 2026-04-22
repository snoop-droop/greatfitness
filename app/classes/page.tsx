export default function Programs() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Workout Programs</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        
        <div style={card}>
          <h3> Strength Program</h3>
          <p>Build muscle and increase power</p>
        </div>

        <div style={card}>
          <h3> Fat Loss Program</h3>
          <p>Burn calories and lose weight</p>
        </div>

        <div style={card}>
          <h3> Flexibility Program</h3>
          <p>Improve mobility and recovery</p>
        </div>

      </div>
    </div>
  );
}

const card = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "12px",
};