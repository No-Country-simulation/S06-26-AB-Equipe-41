const regions = [
  ["Luanda", 82.4],
  ["Benguela", 76.8],
  ["Huambo", 68.3],
  ["Huíla", 45.2],
  ["Bié", 32.1],
];

export default function RankingCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h2 className="font-semibold mb-4">
        Ranking Provincial
      </h2>

      {regions.map(([name, score], index) => (
        <div
          key={name}
          className="flex justify-between py-2 border-b"
        >
          <span>
            {index + 1}. {name}
          </span>

          <span className="font-semibold">
            {score}
          </span>
        </div>
      ))}
    </div>
  );
}