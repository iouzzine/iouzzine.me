"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/app/data";
import { ScrollProgress } from "./ScrollProgress";

const chapters = [
  { id: "hero", label: "Identity", num: "01" },
  { id: "about", label: "Mindset", num: "02" },
  { id: "projects", label: "Impact", num: "03" },
  { id: "skills", label: "Toolbox", num: "04" },
  { id: "experience", label: "Evolution", num: "05" },
  { id: "contact", label: "Connection", num: "06" },
];

export const Nav = ({ activeChapter }: { activeChapter: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <ScrollProgress />

      <nav
        style={{
          position: "fixed",
          top: "3px",
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 3rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(6,6,10,0.88)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <span style={{ color: "var(--muted)" }}>{"<"}</span>
          <span style={{ color: "var(--text)" }}>{personal.logo}</span>
          <span style={{ color: "var(--cyan)", fontWeight: 700 }}>/</span>
          <span style={{ color: "var(--muted)" }}>{">"}</span>
        </div>

        {/* Desktop links */}
        <div
          className="nav-desktop"
          style={{ display: "flex", gap: "6px", alignItems: "center" }}
        >
          {chapters.map((c) => {
            const isActive = activeChapter === c.id;
            return (
              <button
                key={c.id}
                onClick={() => handleScrollTo(c.id)}
                style={{
                  background: isActive ? "rgba(59,130,246,0.1)" : "none",
                  border: isActive
                    ? "1px solid rgba(59,130,246,0.25)"
                    : "1px solid transparent",
                  borderRadius: "6px",
                  cursor: "pointer",
                  padding: "6px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "10px",
                    color: isActive ? "var(--cyan)" : "rgba(255,255,255,0.22)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {c.num}
                </span>
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--text)" : "var(--muted)",
                  }}
                >
                  {c.label}
                </span>
                {isActive && (
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "var(--cyan)",
                      boxShadow: "0 0 6px var(--cyan)",
                      flexShrink: 0,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            className="nav-desktop"
            onClick={() => handleScrollTo("contact")}
            style={{
              background: "var(--cyan)",
              color: "#06060a",
              border: "none",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              padding: "9px 22px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.25s",
              boxShadow: "0 0 20px rgba(59,130,246,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 0 36px rgba(59,130,246,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.3)";
            }}
          >
            Hire Me
          </button>

          {/* Hamburger */}
          <button
            className="nav-mobile"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px",
              padding: "8px 10px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "var(--text)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(4.5px, -4.5px)"
                        : "scaleX(0)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer — AnimatePresence for proper enter/exit */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "75px",
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(6,6,10,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div style={{ padding: "16px 24px", display: "grid", gap: "4px" }}>
              {chapters.map((c, i) => {
                const isActive = activeChapter === c.id;
                return (
                  <motion.button
                    key={c.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    onClick={() => handleScrollTo(c.id)}
                    style={{
                      background: isActive ? "rgba(59,130,246,0.08)" : "none",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      padding: "14px 16px",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "11px",
                        color: isActive ? "var(--cyan)" : "var(--muted)",
                        width: "24px",
                      }}
                    >
                      {c.num}
                    </span>
                    <span
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "16px",
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "var(--text)" : "var(--muted)",
                      }}
                    >
                      {c.label}
                    </span>
                    {isActive && (
                      <span
                        style={{
                          marginLeft: "auto",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--cyan)",
                          boxShadow: "0 0 8px var(--cyan)",
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
              <button
                onClick={() => handleScrollTo("contact")}
                style={{
                  marginTop: "8px",
                  background: "var(--cyan)",
                  color: "#06060a",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  padding: "14px 16px",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                Hire Me →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
