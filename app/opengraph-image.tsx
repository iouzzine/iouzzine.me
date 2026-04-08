import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ismail Ouzzine — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #0f0f11 0%, #111827 60%, #1a1a2e 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 80px',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Availability badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(34,197,94,0.12)',
          border: '1px solid rgba(34,197,94,0.35)',
          borderRadius: '100px',
          padding: '8px 18px',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#22c55e',
          }}
        />
        <span
          style={{
            color: '#86efac',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Available for projects
        </span>
      </div>

      {/* Name */}
      <h1
        style={{
          fontSize: '80px',
          fontWeight: 800,
          color: '#ffffff',
          margin: '0 0 12px 0',
          lineHeight: 1.05,
          letterSpacing: '-2px',
        }}
      >
        Ismail Ouzzine
      </h1>

      {/* Title */}
      <p
        style={{
          fontSize: '26px',
          color: '#a1a1aa',
          margin: '0 0 56px 0',
          fontWeight: 400,
        }}
      >
        Full Stack Developer
      </p>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '48px' }}>
        {[
          { number: '6+', label: 'Years Experience' },
          { number: '30+', label: 'Projects Delivered' },
          { number: '15+', label: 'Clients' },
        ].map((stat) => (
          <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '36px', fontWeight: 700, color: '#ffffff' }}>
              {stat.number}
            </span>
            <span style={{ fontSize: '14px', color: '#71717a', fontWeight: 400 }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom domain */}
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          right: '80px',
          color: '#3f3f46',
          fontSize: '18px',
          fontWeight: 500,
          letterSpacing: '1px',
        }}
      >
        iouzzine.me
      </div>

      {/* Decorative accent line */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: 'linear-gradient(180deg, #6366f1 0%, #22c55e 100%)',
        }}
      />
    </div>,
    { ...size },
  );
}
