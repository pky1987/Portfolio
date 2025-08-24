interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className = '' }: TechBadgeProps) {
  return (
    <span
      className={`px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-xs border border-purple-700/50 ${className}`}
    >
      {name}
    </span>
  );
}