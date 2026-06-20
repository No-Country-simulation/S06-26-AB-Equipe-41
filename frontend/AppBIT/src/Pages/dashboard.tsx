import './dashboard.css';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import MetricCard from '../Components/MetricCard';
import RankingCard from '../Components/RankingCard';
import MapSection from '../Components/Mapsection';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">
        <Header />
        
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Visão Geral</h1>
            <p className="dashboard-subtitle">Panorama de inclusão digital e equidade social</p>
          </div>
        </div>
        
        <div className="metrics-grid">
          <MetricCard title="Cobertura de Rede Média" value="78,4%" change="+8,2%" />
          <MetricCard title="Taxa de Emprego Média" value="61,3%" change="+5,7%" />
          <MetricCard title="Programas de Formação" value="1.248" change="+12,4%" />
          <MetricCard title="Indicador de Saúde Mental" value="72,6%" change="+4,3%" />
        </div>

        <div className="dashboard-grid-3">
          <div className="left-column">
            <div className="card">
              <h3>Consultas Recentes</h3>
              <div className="consult-item">
                <p className="consult-title">Onde faltam programas de formação para jovens de baixa renda?</p>
                <span className="consult-date">Hoje, 10:24</span>
              </div>
              <a className="link">Ver todas as consultas →</a>
            </div>

            <div className="card">
              <h3>Alertas Ativos</h3>
              <div className="alert-item alert-critico">
                <span>⚠️</span>
                <div>
                  <p>Baixa cobertura de rede em 12 regiões</p>
                  <span>Crítico</span>
                </div>
              </div>
              <a className="link">Ver todos os alertas →</a>
            </div>
          </div>

          <MapSection />
          
          <div className="right-column">
            <RankingCard />

            <div className="card">
              <h3>Distribuição por Indicador</h3>
              <div className="donut">12.847<br/>Total de registros</div>
            </div>

            <div className="card">
              <h3>Assistente IA</h3>
              <p>Olál! Sou seu assistente de IA. Posso ajudá-lo a analisar dados...</p>
            </div>
          </div>
        </div>

        <div className="card ai-question">
          <h3>Faça uma pergunta para a IA</h3>
          <div className="ai-input">
            <input placeholder="Ex: Quais regiões têm alta concentração populacional mas baixa cobertura de rede?" />
            <button>Enviar</button>
          </div>
        </div>
      </main>
    </div>
  )
}
