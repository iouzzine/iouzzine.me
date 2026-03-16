interface TechBadgeProps {
  name: string;
  color?: string;
  className?: string;
}

const hexToRgba = (hex: string, alpha: number) => {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return `rgba(100,100,100,${alpha})`;
  return `rgba(${r},${g},${b},${alpha})`;
};

const TechBadge = ({ name, color = '#888', className }: TechBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className ?? ''}`}
      style={{
        backgroundColor: hexToRgba(color, 0.12),
        border: `1px solid ${hexToRgba(color, 0.35)}`,
        color,
      }}
    >
      {name}
    </span>
  );
};

export default TechBadge;
