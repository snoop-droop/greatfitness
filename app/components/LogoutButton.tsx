"use client";

export default function LogoutButton() {
  function handleLogout() {
    window.location.href = "/";
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        background: "#ef4444",
        color: "white",
        padding: "6px 12px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Logout
    </button>
  );
}