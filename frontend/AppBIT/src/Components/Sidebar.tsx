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
    <aside className="sidebar">
      <div className="sidebar-logo-box">
        <h2 className="sidebar-logo">
          BiT
        </h2>

        <p className="sidebar-subtitle">
          Painel de Dados Públicos
        </p>
      </div>

      <nav className="sidebar-nav">
        {items.map((item, index) => (
          <button
            key={index}
            className="sidebar-item"
          >
            <item.icon size={20} />
            {item.text}
          </button>
        ))}
      </nav>
    </aside>
  );
}