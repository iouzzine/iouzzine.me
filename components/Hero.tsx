"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { hero, personal } from "@/app/data";
import { fadeUp as item, stagger, terminalVariant } from "@/lib/motion";

const container = stagger(0.12);

export const Hero = ({ showParticles }: { showParticles: boolean }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    hero.terminalLines.forEach((line, i) => {
      timers.push(
        setTimeout(() => setVisibleLines((prev) => [...prev, i]), line.delay),
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const word = hero.typewriterWords[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && typing.length < word.length) {
      timeout = setTimeout(
        () => setTyping(word.slice(0, typing.length + 1)),
        80,
      );
    } else if (!deleting && typing.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typing.length > 0) {
      timeout = setTimeout(() => setTyping(typing.slice(0, -1)), 45);
    } else if (deleting && typing.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % hero.typewriterWords.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [typing, deleting, wordIdx]);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    setMousePos({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-screen-label="01 Identity"
      onMouseMove={handleMouse}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 8vw 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid bg */}
      {showParticles && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `linear-gradient(rgba(129,140,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.04) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            transform: `translate(${(mousePos.x - 0.5) * -18}px, ${(mousePos.y - 0.5) * -18}px)`,
            transition: "transform 1s ease-out",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: `radial-gradient(ellipse 55% 55% at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(129,140,248,0.07) 0%, transparent 70%)`,
          transition: "background 0.8s ease-out",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "440px",
          height: "440px",
          background:
            "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
          animation: "floatGlow 7s ease-in-out infinite",
        }}
      />

      {/* Layout */}
      <div
        className="hero-layout"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "64px",
          width: "100%",
          maxWidth: "1300px",
        }}
      >
        {/* Left: staggered content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ flex: "1 1 auto", minWidth: 0 }}
        >
          <motion.div
            variants={item}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              color: "var(--cyan)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Chapter 01 — Identity
          </motion.div>

          <motion.h1
            variants={item}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              margin: "0 0 20px",
              color: "var(--text)",
              letterSpacing: "-0.025em",
            }}
          >
            I build things that
            <br />
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ color: "var(--cyan)" }}>{hero.highlightWord}</span>
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--cyan)",
                  opacity: 0.4,
                  borderRadius: "1px",
                }}
              />
            </span>{" "}
            at scale.
          </motion.h1>

          <motion.div
            variants={item}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              color: "var(--muted)",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {hero.tagline}{" "}
            <span style={{ color: "var(--violet)", fontWeight: 600 }}>
              {typing}
              <span
                style={{ animation: "blink 1s infinite", color: "var(--cyan)" }}
              >
                |
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              maxWidth: "500px",
              marginBottom: "44px",
            }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={item}
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "56px",
            }}
          >
            <button
              onClick={() => scrollTo("projects")}
              style={{
                background: "var(--cyan)",
                color: "#06060a",
                border: "none",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                padding: "13px 30px",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 0 28px rgba(129,140,248,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 0 48px rgba(129,140,248,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 0 28px rgba(129,140,248,0.35)";
              }}
            >
              View Missions →
            </button>

            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "transparent",
                color: "var(--text)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                padding: "13px 30px",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "none";
              }}
            >
              Let&apos;s Connect
            </button>

            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "var(--muted)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                padding: "13px 24px",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="stat-row"
            style={{ display: "flex", gap: "44px", flexWrap: "wrap" }}
          >
            {hero.stats.map(({ value, label }, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    color: "var(--cyan)",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "12px",
                    color: "var(--muted)",
                    marginTop: "4px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: terminal */}
        <motion.div
          className="hero-terminal"
          variants={terminalVariant}
          initial="hidden"
          animate="show"
          style={{ flex: "0 0 420px", fontFamily: "JetBrains Mono, monospace" }}
        >
          <div
            style={{
              background: "rgba(14,14,22,0.85)",
              borderRadius: "12px",
              border: "1px solid rgba(129,140,248,0.18)",
              boxShadow:
                "0 0 60px rgba(129,140,248,0.12), 0 24px 80px rgba(0,0,0,0.5)",
              backdropFilter: "blur(16px)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FF5F57",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FFBD2E",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#28CA41",
                }}
              />
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "11px",
                  color: "var(--muted)",
                }}
              >
                ~/dev/portfolio
              </span>
            </div>
            <div style={{ padding: "20px", minHeight: "240px" }}>
              {hero.terminalLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.9",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    opacity: visibleLines.includes(i) ? 1 : 0,
                    maxHeight: visibleLines.includes(i) ? "28px" : "0",
                    transition: "opacity 0.3s ease, max-height 0.3s ease",
                    color: "var(--muted)",
                  }}
                >
                  <span style={{ color: line.color }}>{line.prefix}</span>
                  <span
                    style={{
                      color: line.cursor ? "transparent" : "var(--text)",
                    }}
                  >
                    {line.text}
                  </span>
                  {line.cursor && visibleLines.includes(i) && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "14px",
                        background: "var(--cyan)",
                        verticalAlign: "middle",
                        animation: "termBlink 1s infinite",
                        marginLeft: "2px",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              margin: "0 20px",
              height: "20px",
              background:
                "radial-gradient(ellipse, rgba(129,140,248,0.2) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "scrollBounce 2.5s ease-in-out infinite",
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "9px",
            color: "var(--muted)",
            letterSpacing: "0.3em",
          }}
        >
          SCROLL
        </div>
        <div
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, var(--cyan), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
};
