"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact, personal } from "@/app/data";
import { fadeUp, stagger } from "@/lib/motion";

type Status = "idle" | "sending" | "sent" | "error";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const canSubmit = status === "idle" || status === "error";

  return (
    <section
      id="contact"
      data-screen-label="06 Connection"
      style={{
        padding: "120px 8vw 80px",
        position: "relative",
        overflow: "hidden",
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
            "linear-gradient(to right, transparent, rgba(0,212,200,0.3), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(0,212,200,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger()}
        style={{ maxWidth: "900px", margin: "0 auto" }}
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
            textAlign: "center",
          }}
        >
          Final Chapter — Connection
        </motion.div>

        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 1.05,
            margin: "0 0 16px",
            letterSpacing: "-0.03em",
            textAlign: "center",
          }}
        >
          {contact.heading.replace(contact.highlightPhrase, "").trim()}
          <br />
          <span style={{ color: "var(--cyan)" }}>
            {contact.highlightPhrase}
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "1.05rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            textAlign: "center",
            maxWidth: "500px",
            margin: "0 auto 56px",
          }}
        >
          {contact.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: "16px" }}
          >
            {/* Honeypot — hidden from real users, bots fill it */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{
                position: "absolute",
                left: "-9999px",
                opacity: 0,
                pointerEvents: "none",
              }}
            />

            {[
              {
                key: "name" as const,
                label: "Name",
                type: "text",
                placeholder: "Your name",
              },
              {
                key: "email" as const,
                label: "Email",
                type: "email",
                placeholder: "your@email.com",
              },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    letterSpacing: "0.15em",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {label.toUpperCase()}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    padding: "12px 16px",
                    boxSizing: "border-box",
                    color: "var(--text)",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>
            ))}

            <div>
              <label
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  color: "var(--muted)",
                  letterSpacing: "0.15em",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                MESSAGE
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                required
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "6px",
                  padding: "12px 16px",
                  boxSizing: "border-box",
                  color: "var(--text)",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
            </div>

            {status === "error" && (
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "13px",
                  color: "#f87171",
                  margin: 0,
                }}
              >
                {errorMsg}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={!canSubmit}
              whileHover={canSubmit ? { scale: 1.02 } : {}}
              whileTap={canSubmit ? { scale: 0.98 } : {}}
              animate={{
                background: status === "sent" ? "var(--violet)" : "var(--cyan)",
                boxShadow:
                  status === "sent"
                    ? "0 0 30px rgba(155,114,255,0.4)"
                    : "0 0 30px rgba(0,212,200,0.3)",
              }}
              style={{
                color: "#050508",
                border: "none",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "6px",
                cursor: canSubmit ? "pointer" : "default",
              }}
            >
              {status === "idle" && "Send Message →"}
              {status === "sending" && "...Transmitting"}
              {status === "sent" && "✓ Message Received"}
              {status === "error" && "Try Again →"}
            </motion.button>
          </form>

          {/* Right side */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  color: "var(--muted)",
                  letterSpacing: "0.2em",
                  marginBottom: "20px",
                }}
              >
                {"// DIRECT CHANNELS"}
              </div>
              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{ opacity: 0.7 }}
                style={{
                  display: "block",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                  fontWeight: 700,
                  color: "var(--cyan)",
                  textDecoration: "none",
                  marginBottom: "32px",
                }}
              >
                {contact.email}
              </motion.a>

              <div style={{ display: "grid", gap: "12px" }}>
                {contact.links.map((l, i) => (
                  <motion.a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      borderColor: "rgba(0,212,200,0.2)",
                      backgroundColor: "rgba(0,212,200,0.04)",
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 18px",
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(255,255,255,0.02)",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--text)",
                      }}
                    >
                      {l.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "12px",
                        color: "var(--cyan)",
                      }}
                    >
                      {l.handle}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "32px",
                padding: "20px",
                borderRadius: "6px",
                border: "1px solid rgba(0,212,200,0.1)",
                background: "rgba(0,212,200,0.03)",
              }}
            >
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  color: "var(--cyan)",
                  letterSpacing: "0.15em",
                  marginBottom: "8px",
                }}
              >
                {"// STATUS"}
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 8px #22c55e",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "14px",
                    color: "var(--text)",
                  }}
                >
                  {contact.status}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          style={{
            marginTop: "80px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              color: "var(--muted)",
            }}
          >
            <span style={{ color: "var(--cyan)" }}>{"<"}</span>
            {personal.logo}
            <span style={{ color: "var(--cyan)" }}>{"/>"}</span>{" "}
            {contact.footer}
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              color: "var(--muted)",
            }}
          >
            {contact.footerStack}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
