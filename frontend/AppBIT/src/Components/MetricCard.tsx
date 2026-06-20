interface Props {
  title: string;
  value: string;
  change: string;
}

export default function MetricCard({
  title,
  value,
  change,
}: Props) {
  return (
    <div className="metric-card">
      <p className="metric-label">
        {title}
      </p>

      <h3 className="metric-value">
        {value}
      </h3>

      <p className="metric-change">
        ↑ {change}
      </p>
    </div>
  );
}