const regions = [
  ["Luanda", 82.4],
  ["Benguela", 76.8],
  ["Huambo", 68.3],
  ["Huíla", 45.2],
  ["Bié", 32.1],
];

export default function RankingCard() {
  return (
    <div className="ranking-card">
      <h2 className="ranking-title">
        Ranking Provincial
      </h2>

      {regions.map(([name, score], index) => (
        <div
          key={name}
          className="ranking-row"
        >
          <span className="ranking-name">
            {index + 1}. {name}
          </span>

          <span className="ranking-score">
            {score}
          </span>
        </div>
      ))}
    </div>
  );
}