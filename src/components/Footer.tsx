import React from "react";

export default function Footer() {
  return (
    <footer className="container" style={{ padding: "40px 0", borderTop: "1px solid var(--border-color)", textAlign: "center" }}>
      <p className="caption" style={{ color: "var(--text-secondary)" }}>
        &copy; {new Date().getFullYear()} Nivrutti Dandekar. Designed with precision and purposeful intent.
      </p>
    </footer>
  );
}
