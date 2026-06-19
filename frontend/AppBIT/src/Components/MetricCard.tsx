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
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="text-slate-500 text-sm">
        {title}
      </p>

      <h3 className="text-4xl font-bold mt-2">
        {value}
      </h3>

      <p className="text-green-600 mt-2">
        ↑ {change}
      </p>
    </div>
  );
}