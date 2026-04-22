"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/data";
import { fadeUp, stagger } from "@/lib/motion";

const toFilename = (label: string) =>
  label.toLowerCase().replace(" & ", "-").replace(/ /g, "-") + ".ts";

export const Skills = () => (
  <section
    id="skills"
    data-screen-label="04 Toolbox"
    style={{ padding: "120px 8vw", position: "relative" }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background:
          "linear-gradient(to right, transparent, rgba(0,212,200,0.3), transparent)",
      }}
    />

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
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
        Chapter 04 — Toolbox
      </motion.div>

      <motion.h2
        variants={fadeUp}
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 700,
          color: "var(--text)",
          lineHeight: 1.1,
          margin: "0 0 60px",
          letterSpacing: "-0.02em",
        }}
      >
        The <span style={{ color: "var(--cyan)" }}>arsenal.</span>
      </motion.h2>

      {/* 2×2 code-block grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          marginBottom: "48px",
        }}
      >
        {skills.categories.map((cat, ci) => {
          const lines: { num: number; node: React.ReactNode }[] = [];
          let n = 1;

          lines.push({
            num: n++,
            node: (
              <>
                <span style={{ color: "#818CF8" }}>import</span>
                <span style={{ color: "rgba(234,234,244,0.35)" }}>{" {"}</span>
              </>
            ),
          });

          cat.items.forEach((item, ii) => {
            const isLast = ii === cat.items.length - 1;
            lines.push({
              num: n++,
              node: (
                <span style={{ paddingLeft: "20px", display: "block" }}>
                  <span style={{ color: cat.color }}>{item}</span>
                  {!isLast && (
                    <span style={{ color: "rgba(234,234,244,0.25)" }}>,</span>
                  )}
                </span>
              ),
            });
          });

          lines.push({
            num: n++,
            node: (
              <>
                <span style={{ color: "rgba(234,234,244,0.35)" }}>{"} "}</span>
                <span style={{ color: "#818CF8" }}>from </span>
                <span style={{ color: "#34D399" }}>
                  &quot;{cat.label.toLowerCase()}&quot;
                </span>
              </>
            ),
          });

          return (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: ci * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              whileHover={{
                borderColor: `${cat.colorHex}50`,
                boxShadow: `0 0 32px ${cat.color}18`,
              }}
              style={{
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(8,8,18,0.95)",
                overflow: "hidden",
              }}
            >
              {/* Title bar */}
              <div
                style={{
                  padding: "10px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: cat.color,
                    boxShadow: `0 0 8px ${cat.color}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {toFilename(cat.label)}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "10px",
                    color: "rgba(107,107,138,0.4)",
                  }}
                >
                  TypeScript
                </span>
              </div>

              {/* Code lines */}
              <div style={{ padding: "18px 20px" }}>
                {lines.map(({ num, node }, li) => (
                  <motion.div
                    key={li}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: ci * 0.1 + li * 0.05,
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      minHeight: "24px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "11px",
                        color: "rgba(107,107,138,0.3)",
                        userSelect: "none",
                        width: "24px",
                        textAlign: "right",
                        marginRight: "20px",
                        flexShrink: 0,
                        lineHeight: "1.8",
                      }}
                    >
                      {num}
                    </span>
                    <span
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "13px",
                        lineHeight: "1.8",
                        flex: 1,
                      }}
                    >
                      {node}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tools chips */}
      <motion.div variants={fadeUp}>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            color: "var(--muted)",
            letterSpacing: "0.2em",
            marginBottom: "16px",
          }}
        >
          {"// DAILY TOOLS"}
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {skills.tools.map((t, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{
                borderColor: "rgba(0,212,200,0.3)",
                color: "#818CF8",
              }}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "13px",
                color: "var(--text)",
                padding: "8px 18px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                cursor: "default",
                display: "inline-block",
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);
