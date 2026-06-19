import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import MetricCard from "../Components/MetricCard";
//import RecentQueries from "../components/RecentQueries";
//import AlertsCard from "../components/AlertsCard";
import RankingCard from "../Components/RankingCard";
//import DistributionChart from "../components/DistributionChart";
import MapSection from "../Components/Mapsection";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-6">
        <Header />

        <h1 className="text-3xl font-bold text-slate-800">
          Visão Geral
        </h1>

        <p className="text-slate-500 mb-6">
          Panorama de inclusão digital e equidade social
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Cobertura de Rede Média"
            value="78,4%"
            change="+8,2%"
          />

          <MetricCard
            title="Taxa de Emprego Média"
            value="61,3%"
            change="+5,7%"
          />

          <MetricCard
            title="Programas de Formação"
            value="1.248"
            change="+12,4%"
          />

          <MetricCard
            title="Indicador de Saúde Mental"
            value="72,6%"
            change="+4,3%"
          />
        </div>

      
          <div className="col-span-12 lg:col-span-6">
            <MapSection />
          </div>

          <div className="col-span-12 lg:col-span-3 space-y-4">
            <RankingCard />
          </div>
      </main>
    </div>
  );
}