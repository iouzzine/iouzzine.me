'use client'
export interface Tweaks {
  accentColor: string
  secondaryColor: string
  bgColor: string
  showParticles: boolean
  fontScale: number
}

interface TweaksPanelProps {
  tweaks: Tweaks
  onChange: (t: Tweaks) => void
  visible: boolean
}

export const TweaksPanel = ({ tweaks, onChange, visible }: TweaksPanelProps) => {
  if (!visible) return null
  return (
    <div style={{
      position: 'fixed', bottom: '24px', right: '24px', zIndex: 999,
      background: '#0d0d15', border: '1px solid rgba(0,212,200,0.25)',
      borderRadius: '10px', padding: '20px', width: '240px',
      boxShadow: '0 0 40px rgba(0,212,200,0.1)',
    }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--cyan)', letterSpacing: '0.2em', marginBottom: '16px' }}>// TWEAKS</div>
      <div style={{ display: 'grid', gap: '14px' }}>
        <label style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', color: 'var(--muted)' }}>
          Accent Color
          <input type="color" value={tweaks.accentColor}
            onChange={e => onChange({ ...tweaks, accentColor: e.target.value })}
            style={{ display: 'block', marginTop: '6px', width: '100%', height: '32px', border: 'none', borderRadius: '4px', background: 'none', cursor: 'pointer' }} />
        </label>
        <label style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', color: 'var(--muted)' }}>
          Secondary Color
          <input type="color" value={tweaks.secondaryColor}
            onChange={e => onChange({ ...tweaks, secondaryColor: e.target.value })}
            style={{ display: 'block', marginTop: '6px', width: '100%', height: '32px', border: 'none', borderRadius: '4px', background: 'none', cursor: 'pointer' }} />
        </label>
        <label style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Grid Background
          <input type="checkbox" checked={tweaks.showParticles}
            onChange={e => onChange({ ...tweaks, showParticles: e.target.checked })}
            style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: 'var(--cyan)' }} />
        </label>
        <label style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', color: 'var(--muted)' }}>
          Font Scale: {tweaks.fontScale}×
          <input type="range" min="0.85" max="1.15" step="0.05" value={tweaks.fontScale}
            onChange={e => onChange({ ...tweaks, fontScale: parseFloat(e.target.value) })}
            style={{ display: 'block', width: '100%', marginTop: '6px', accentColor: 'var(--cyan)' }} />
        </label>
      </div>
    </div>
  )
}
