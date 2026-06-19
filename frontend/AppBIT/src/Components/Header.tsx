export default function Header() {
  return (
    <div className="flex justify-end items-center mb-8">
      <div className="flex gap-3">
        <select className="border rounded-lg px-4 py-2">
          <option>Angola</option>
          <option>Brasil</option>
        </select>

        <select className="border rounded-lg px-4 py-2">
          <option>Últimos 12 meses</option>
          <option>Últimos 6 meses</option>
          <option>Últimos 30 dias</option>
        </select>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
          Exportar Relatório
        </button>
      </div>
    </div>
  );
}