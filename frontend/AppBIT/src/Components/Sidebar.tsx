import {
  LayoutDashboard,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Map,
  FileText,
  Bell,
  Settings
} from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: LayoutDashboard, text: "Visão Geral" },
    { icon: GraduationCap, text: "Formações" },
    { icon: Briefcase, text: "Empregabilidade" },
    { icon: HeartPulse, text: "Saúde Mental" },
    { icon: Map, text: "Mapas" },
    { icon: FileText, text: "Relatórios" },
    { icon: Bell, text: "Alertas" },
    { icon: Settings, text: "Configurações" }
  ];

  return (
    <aside className="w-72 bg-slate-900 text-white p-5">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-indigo-400">
          BiT
        </h2>

        <p className="text-sm text-slate-400">
          Painel de Dados Públicos
        </p>
      </div>

      <nav className="space-y-2">
        {items.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800"
          >
            <item.icon size={20} />
            {item.text}
          </button>
        ))}
      </nav>
    </aside>
  );
}