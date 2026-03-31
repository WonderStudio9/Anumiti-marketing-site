interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: readonly Stat[];
  className?: string;
}

export function StatsBar({ stats, className = "" }: StatsBarProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-8 md:grid-cols-4 ${className}`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-teal md:text-4xl">{stat.value}</div>
          <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
