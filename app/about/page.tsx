"use client";

import Sidebar from "@/app/components/Sidebar";

export default function About() {
  return (
    <div style={appLayout}>
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main style={main}>
        
        {/* HERO */}
        <section style={hero}>
          <h1 style={title}>GREATFITNESS</h1>
          <p style={tagline}>
            Strength • Discipline • Performance
          </p>
        </section>

        {/* CONTENT */}
        <section style={content}>

          {/* ABOUT CARD */}
          <div style={card}>
            <h2 style={heading}>About Us</h2>
            <p style={text}>
              GREATFITNESS is a hardcore commercial gym built for individuals who
              take their fitness seriously. Whether you're focused on strength,
              conditioning, or overall health, we provide the environment and tools
              needed to push your limits.
            </p>
          </div>

          {/* MISSION CARD */}
          <div style={card}>
            <h2 style={heading}>Our Mission</h2>
            <p style={text}>
              Our mission is to help members build strength, confidence, and
              discipline through structured training, consistency, and a strong
              community. We combine modern technology with proven training methods
              to deliver real results.
            </p>
          </div>

          {/* FEATURES */}
          <div style={features}>
            <div style={featureCard}>
              <h3> Strength Training</h3>
              <p>Focused programs for muscle and power development</p>
            </div>

            <div style={featureCard}>
              <h3> Conditioning</h3>
              <p>Improve endurance and overall athletic performance</p>
            </div>

            <div style={featureCard}>
              <h3> Progress Tracking</h3>
              <p>Stay consistent and monitor your fitness journey</p>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

const appLayout = {
  display: "flex",
  minHeight: "100vh",
  background: "#0b1220",
  color: "#e5e7eb",
};

const main = {
  flex: 1,
  padding: "40px",
};

const hero = {
  textAlign: "center" as const,
  marginBottom: "50px",
};

const title = {
  fontSize: "48px",
  fontWeight: "800",
  color: "#22d3ee",
  letterSpacing: "2px",
};

const tagline = {
  marginTop: "10px",
  color: "#94a3b8",
};

const content = {
  maxWidth: "900px",
  margin: "0 auto",
};

const card = {
  background: "#111a2e",
  padding: "25px",
  borderRadius: "14px",
  border: "1px solid #1f2a44",
  marginBottom: "25px",
};

const heading = {
  fontSize: "22px",
  marginBottom: "10px",
  color: "#22d3ee",
};

const text = {
  lineHeight: "1.6",
  color: "#cbd5f5",
};

const features = {
  display: "flex",
  gap: "20px",
  marginTop: "30px",
  flexWrap: "wrap" as const,
};

const featureCard = {
  flex: 1,
  minWidth: "250px",
  background: "#111a2e",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #1f2a44",
};