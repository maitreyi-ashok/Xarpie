import KPI from '@/components/dashboard/KPI';
import VisitorsChart from '@/components/dashboard/VisitorsChart';
import TrafficSources from '@/components/dashboard/TrafficSources';
import SiteSections from '@/components/dashboard/SiteSections';
import IndustriesEngagement from '@/components/dashboard/IndustriesEngagement';

export default function DashboardPage() {
  return (
    <>
      <header className="dash-head">
        <div>
          <div className="hud-tag">SITE_ANALYTICS // xarpie-labs.vercel.app</div>
          <h1 className="dash-title">Traffic &amp; engagement</h1>
        </div>
        <span className="status-pill">LIVE — LAST 30 DAYS</span>
      </header>

      <section className="kpi-grid" aria-label="Key figures">
        <KPI title="Visitors" value="15,230" delta="12.4%" trend="up" />
        <KPI title="Page views" value="48,520" delta="8.1%" trend="up" />
        <KPI title="Bounce rate" value="32%" delta="1.2%" trend="down" />
        <KPI title="Conversation starts" value="96" delta="6.0%" trend="up" />
      </section>

      <section className="dash-grid-2">
        <div className="dash-panel">
          <h2 className="dash-panel__title">Visitor trend</h2>
          <VisitorsChart />
        </div>
        <div className="dash-panel">
          <h2 className="dash-panel__title">Traffic sources</h2>
          <TrafficSources />
        </div>
      </section>

      <section className="dash-panel">
        <h2 className="dash-panel__title">Page views by section</h2>
        <SiteSections />
      </section>

      <section className="dash-panel">
        <h2 className="dash-panel__title">Industries page engagement</h2>
        <IndustriesEngagement />
      </section>

      <p className="dash-note">Figures shown are sample data.</p>
    </>
  );
}
