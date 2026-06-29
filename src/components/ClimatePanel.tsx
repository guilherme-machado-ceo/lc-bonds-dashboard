import { useEffect, useState } from "react";
import { CloudLightning, Thermometer, Droplets, Wind } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

interface ClimateItem {
  region: string;
  country: string;
  severity: "low" | "medium" | "high" | "critical";
  temperature_anomaly_c: number;
  drought_index: string;
  carbon_intensity_tco2: number;
  renewable_share_pct: number;
  description: string;
  source: string;
  year: number;
}

const severityConfig = {
  low: { color: "#4ade80", labelKey: "climate.severityLow" as const },
  medium: { color: "#fbbf24", labelKey: "climate.severityMedium" as const },
  high: { color: "#fb923c", labelKey: "climate.severityHigh" as const },
  critical: { color: "#FF4444", labelKey: "climate.severityCritical" as const },
};

export default function ClimatePanel() {
  const { t } = useI18n();
  const [items, setItems] = useState<ClimateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://hubstry-em-dashboard.vercel.app/api/climate")
      .then((r) => r.json())
      .then((data) => { setItems(data.items || []); setLoading(false); })
      .catch(() => { setError(t("climate.error")); setLoading(false); });
  }, []);

  if (loading) return (
    <section className="border-b border-[#1a1a1a] bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-4">
          <CloudLightning size={14} className="text-[#00FFFF]" />
          <h2 className="text-sm font-bold tracking-tight text-[#e0e0e0]">{t("climate.title")}</h2>
          <span className="text-[8px] font-mono text-[#444] ml-auto">{t("climate.loading")}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
          {[1,2].map((i) => (
            <div key={i} className="bg-[#0a0a0a] p-4 animate-pulse">
              <div className="h-3 bg-[#1a1a1a] rounded mb-2 w-1/2"></div>
              <div className="h-2 bg-[#1a1a1a] rounded mb-1 w-full"></div>
              <div className="h-2 bg-[#1a1a1a] rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  if (error) return (
    <section className="border-b border-[#1a1a1a] bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="bg-[#0a0a0a] p-4 border border-[#1a1a1a]">
          <span className="text-[11px] font-mono text-[#FF4444]">{error}</span>
        </div>
      </div>
    </section>
  );

  return (
    <section className="border-b border-[#1a1a1a] bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-4">
          <CloudLightning size={14} className="text-[#00FFFF]" />
          <h2 className="text-sm font-bold tracking-tight text-[#e0e0e0]">{t("climate.title")}</h2>
          <span className="text-[8px] font-mono text-[#444] ml-auto">{items.length} {t("climate.countries")} &middot; {t("climate.source")}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
          {items.map((item, i) => {
            const sev = severityConfig[item.severity];
            return (
              <div key={i} className="bg-[#0a0a0a] p-4 hover:bg-[#111] transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#e0e0e0]">{item.country}</span>
                    <span className="text-[8px] font-mono text-[#444]">{item.region}</span>
                  </div>
                  <span className="text-[8px] font-mono uppercase tracking-widest px-1.5 py-0.5 border"
                    style={{ color: sev.color, borderColor: `${sev.color}44`, backgroundColor: `${sev.color}11` }}>
                    {t(sev.labelKey)}
                  </span>
                </div>
                <p className="text-[10px] text-[#555] leading-relaxed mb-3">{item.description}</p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Thermometer size={10} className="text-[#FF8C00]" />
                    <div>
                      <span className="text-[9px] font-mono text-[#e0e0e0]">+{item.temperature_anomaly_c}C</span>
                      <span className="block text-[7px] font-mono text-[#444]">{t("climate.anomaly")}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Droplets size={10} className="text-[#00FFFF]" />
                    <div>
                      <span className="text-[9px] font-mono text-[#e0e0e0]">{item.renewable_share_pct}%</span>
                      <span className="block text-[7px] font-mono text-[#444]">{t("climate.renewables")}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wind size={10} className="text-[#666]" />
                    <div>
                      <span className="text-[9px] font-mono text-[#e0e0e0]">{item.carbon_intensity_tco2}</span>
                      <span className="block text-[7px] font-mono text-[#444]">{t("climate.carbon")}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-[#444]">{item.drought_index}</span>
                  <span className="text-[8px] font-mono text-[#333]">&middot;</span>
                  <span className="text-[8px] font-mono text-[#444]">{item.source}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
