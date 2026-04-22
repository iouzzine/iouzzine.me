"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/app/data";
import { fadeUp, stagger } from "@/lib/motion";
import Link from "next/link";

export const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="projects"
      data-screen-label="03 Impact"
      style={{
        padding: "120px 8vw",
        background: "rgba(255,255,255,0.01)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(155,114,255,0.3), transparent)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        variants={stagger(0.08)}
      >
        <motion.div
          variants={fadeUp}
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "12px",
            color: "var(--cyan)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Chapter 03 — Impact
        </motion.div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--text)",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Selected <span style={{ color: "var(--cyan)" }}>Missions.</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "14px",
              color: "var(--muted)",
            }}
          >
            Click any mission to expand the brief
          </motion.div>
        </div>

        <div style={{ display: "grid", gap: "16px" }}>
          {projects.map((m, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => setExpanded(isOpen ? null : i)}
                animate={{
                  borderColor: isOpen ? m.color : "rgba(255,255,255,0.07)",
                  boxShadow: isOpen ? `0 0 40px ${m.color}18` : "none",
                }}
                whileHover={
                  !isOpen
                    ? {
                        borderColor: "rgba(255,255,255,0.15)",
                        backgroundColor: "rgba(255,255,255,0.035)",
                      }
                    : {}
                }
                style={{
                  borderRadius: "10px",
                  border: `1px solid ${isOpen ? m.color : "rgba(255,255,255,0.07)"}`,
                  background: isOpen
                    ? "rgba(0,0,0,0.4)"
                    : "rgba(255,255,255,0.02)",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    padding: "28px 32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "12px",
                      color: m.color,
                      letterSpacing: "0.15em",
                      flexShrink: 0,
                    }}
                  >
                    {m.id}
                  </div>
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: "var(--text)",
                      flex: 1,
                    }}
                  >
                    {m.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "13px",
                      color: "var(--muted)",
                      background: "rgba(255,255,255,0.05)",
                      padding: "4px 12px",
                      borderRadius: "20px",
                    }}
                  >
                    {m.tag}
                  </div>
                  <div
                    style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                  >
                    {m.stack.map((s, j) => (
                      <span
                        key={j}
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "11px",
                          color: m.color,
                          background: `${m.color}15`,
                          padding: "3px 10px",
                          borderRadius: "4px",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      color: isOpen ? m.color : "var(--muted)",
                      fontSize: "18px",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </motion.div>
                </div>

                {/* Expanded content — AnimatePresence for clean enter/exit */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 32px 32px" }}>
                        {/* Links */}
                        {m.githubUrl && (
                          <div
                            style={{
                              display: "flex",
                              gap: "12px",
                              marginBottom: "24px",
                            }}
                          >
                            <Link
                              href={m.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "7px",
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "var(--text)",
                                textDecoration: "none",
                                padding: "7px 16px",
                                borderRadius: "6px",
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "rgba(255,255,255,0.03)",
                                transition: "all 0.2s",
                              }}
                              onMouseEnter={(e) => {
                                (
                                  e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(255,255,255,0.25)";
                                (
                                  e.currentTarget as HTMLElement
                                ).style.background = "rgba(255,255,255,0.07)";
                              }}
                              onMouseLeave={(e) => {
                                (
                                  e.currentTarget as HTMLElement
                                ).style.borderColor = "rgba(255,255,255,0.1)";
                                (
                                  e.currentTarget as HTMLElement
                                ).style.background = "rgba(255,255,255,0.03)";
                              }}
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                              </svg>
                              GitHub
                            </Link>
                          </div>
                        )}

                        <div
                          className="project-cols"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3,1fr)",
                            gap: "24px",
                          }}
                        >
                          {[
                            {
                              label: "// CHALLENGE",
                              text: m.challenge,
                              border: "rgba(255,80,80,0.15)",
                              color: "rgba(255,120,120,0.8)",
                              items: null,
                            },
                            {
                              label: "// SOLUTION",
                              text: m.solution,
                              border: "rgba(0,212,200,0.15)",
                              color: "var(--cyan)",
                              items: null,
                            },
                            {
                              label: "// RESULTS",
                              text: null,
                              border: `${m.color}25`,
                              color: m.color,
                              items: m.results,
                            },
                          ].map((col, ci) => (
                            <div
                              key={ci}
                              style={{
                                padding: "20px",
                                borderRadius: "6px",
                                border: `1px solid ${col.border}`,
                                background: "rgba(0,0,0,0.2)",
                              }}
                            >
                              <div
                                style={{
                                  fontFamily: "JetBrains Mono, monospace",
                                  fontSize: "10px",
                                  color: col.color,
                                  letterSpacing: "0.15em",
                                  marginBottom: "12px",
                                }}
                              >
                                {col.label}
                              </div>
                              {col.text && (
                                <p
                                  style={{
                                    fontFamily: "Space Grotesk, sans-serif",
                                    fontSize: "13px",
                                    color: "var(--muted)",
                                    lineHeight: 1.7,
                                    margin: 0,
                                  }}
                                >
                                  {col.text}
                                </p>
                              )}
                              {col.items && (
                                <ul
                                  style={{
                                    margin: 0,
                                    padding: 0,
                                    listStyle: "none",
                                  }}
                                >
                                  {col.items.map((r, ri) => (
                                    <li
                                      key={ri}
                                      style={{
                                        fontFamily: "Space Grotesk, sans-serif",
                                        fontSize: "13px",
                                        color: "var(--text)",
                                        lineHeight: 1.6,
                                        marginBottom: "8px",
                                        paddingLeft: "16px",
                                        position: "relative",
                                      }}
                                    >
                                      <span
                                        style={{
                                          position: "absolute",
                                          left: 0,
                                          color: col.color,
                                        }}
                                      >
                                        →
                                      </span>
                                      {r}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
