export default function Header() {
  return (
    <div className="header-bar">
      <div className="header-filters">
        <select className="header-select">
          <option>Angola</option>
          <option>Brasil</option>
        </select>

        <select className="header-select">
          <option>Últimos 12 meses</option>
          <option>Últimos 6 meses</option>
          <option>Últimos 30 dias</option>
        </select>

        <button className="header-btn">
          Exportar Relatório
        </button>
      </div>
    </div>
  );
}