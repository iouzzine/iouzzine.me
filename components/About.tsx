"use client";
import { motion } from "framer-motion";
import { about } from "@/app/data";
import { fadeUp, slideRight, stagger } from "@/lib/motion";

const section = stagger();

export const About = () => (
  <section
    id="about"
    data-screen-label="02 Mindset"
    style={{ padding: "120px 8vw", position: "relative", overflow: "hidden" }}
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
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
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
        Chapter 02 — Mindset
      </motion.div>

      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        <div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--text)",
              lineHeight: 1.1,
              margin: "0 0 32px",
              letterSpacing: "-0.02em",
            }}
          >
            {about.heading.replace(about.highlightWord, "").trim()}
            <br />
            <span style={{ color: "var(--violet)" }}>
              {about.highlightWord}
            </span>
          </motion.h2>

          {about.body.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.05rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                maxWidth: "420px",
                marginTop: i > 0 ? "16px" : 0,
              }}
            >
              {para}
            </motion.p>
          ))}

          <motion.ul
            variants={fadeUp}
            style={{
              marginTop: "24px",
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: "8px",
            }}
          >
            {about.whatIBuild.map((item, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "14px",
                  color: "var(--muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "var(--cyan)",
                    fontSize: "12px",
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "40px",
              padding: "24px",
              border: "1px solid rgba(155,114,255,0.2)",
              borderRadius: "8px",
              background: "rgba(155,114,255,0.04)",
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                color: "var(--violet)",
                letterSpacing: "0.15em",
                marginBottom: "12px",
              }}
            >
              {"// PHILOSOPHY"}
            </div>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.05rem",
                color: "var(--text)",
                lineHeight: 1.7,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              &quot;{about.philosophy}&quot;
            </p>
          </motion.div>
        </div>

        <motion.div variants={section} style={{ display: "grid", gap: "16px" }}>
          {about.principles.map((p, i) => (
            <motion.div
              key={i}
              variants={slideRight}
              whileHover={{
                x: 6,
                borderColor: "rgba(0,212,200,0.2)",
                backgroundColor: "rgba(0,212,200,0.03)",
              }}
              style={{
                padding: "24px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                cursor: "default",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    color: "var(--cyan)",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {p.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "var(--text)",
                      marginBottom: "6px",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "13px",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </section>
);
