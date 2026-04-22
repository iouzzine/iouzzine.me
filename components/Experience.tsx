"use client";
import { motion } from "framer-motion";
import { experience } from "@/app/data";
import { fadeUp, stagger } from "@/lib/motion";

export const Experience = () => (
  <section
    id="experience"
    data-screen-label="05 Evolution"
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
      variants={stagger()}
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
        Chapter 05 — Evolution
      </motion.div>

      <motion.h2
        variants={fadeUp}
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 700,
          color: "var(--text)",
          lineHeight: 1.1,
          margin: "0 0 72px",
          letterSpacing: "-0.02em",
        }}
      >
        The <span style={{ color: "var(--violet)" }}>journey.</span>
      </motion.h2>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <motion.div
          className="exp-line"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          style={{
            position: "absolute",
            left: "140px",
            top: 0,
            bottom: 0,
            width: "1px",
            background:
              "linear-gradient(to bottom, var(--cyan), var(--violet), transparent)",
            transformOrigin: "top",
          }}
        />

        <div style={{ display: "grid", gap: "48px" }}>
          {experience.map((item, i) => (
            <motion.div
              key={i}
              className="exp-grid"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "40px",
                alignItems: "start",
              }}
            >
              {/* Year */}
              <div
                className="exp-year"
                style={{
                  textAlign: "right",
                  paddingRight: "40px",
                  paddingTop: "4px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "6px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: item.color,
                    boxShadow: `0 0 12px ${item.color}`,
                  }}
                />
              </div>

              {/* Content */}
              <motion.div
                whileHover={{
                  borderColor: `${item.color}40`,
                  backgroundColor: `${item.color}06`,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: "24px 28px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "var(--text)",
                    }}
                  >
                    {item.role}
                  </div>
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "14px",
                      color: item.color,
                    }}
                  >
                    @ {item.company}
                  </div>
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "10px",
                      color: "var(--muted)",
                      background: "rgba(255,255,255,0.05)",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {item.type}
                  </div>
                </div>

                {/* Bullet list */}
                <ul
                  style={{
                    margin: "0 0 16px",
                    padding: 0,
                    listStyle: "none",
                    display: "grid",
                    gap: "6px",
                  }}
                >
                  {item.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "13px",
                        color: "var(--muted)",
                        lineHeight: 1.65,
                        paddingLeft: "16px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: item.color,
                          fontSize: "10px",
                          top: "4px",
                        }}
                      >
                        ▸
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Key outcomes */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginBottom: "12px",
                  }}
                >
                  {item.highlights.map((h, hi) => (
                    <span
                      key={hi}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "12px",
                        color: item.color,
                        background: `${item.color}12`,
                        padding: "3px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      → {h}
                    </span>
                  ))}
                </div>

                {/* Tech stack tags */}
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {item.skills.map((s, si) => (
                    <span
                      key={si}
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "11px",
                        color: "var(--muted)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);
