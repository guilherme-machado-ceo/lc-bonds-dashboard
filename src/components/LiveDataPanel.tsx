import { useEffect, useState } from "react";
import { BarChart3, TrendingUp, TrendingDown } from "lucide-react";

interface MarketItem {
  symbol: string;
  name: string;
  price: number;
  currency: string;
  unit: string;
  change_7d_pct: number | null;
  change_30d_pct: number | null;
  context: string;
  source: string;
  updated_at: string;
}

export default function LiveDataPanel() {
  const [items, setItems] = useState<MarketItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://hubstry-em-dashboard.vercel.app/api/live-data")
      .then((r) => r.json())
      .then((data) => { setItems(data.items || []); setLoading(false); })
      .catch(() => { setError("Falha ao carregar cotacoes"); setLoading(false); });
  }, []);

  if (loading) return (
    <section className="border-b border-[#1a1a1a] bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 size={14} className="text-[#00FFFF]" />
          <h2 className="text-sm font-bold tracking-tight text-[#e0e0e0]">COTACOES AO VIVO</h2>
          <span className="text-[8px] font-mono text-[#444] ml-auto">Carregando...</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a]">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-[#0a0a0a] p-4 animate-pulse">
              <div className="h-3 bg-[#1a1a1a] rounded mb-2 w-1/2"></div>
              <div className="h-4 bg-[#1a1a1a] rounded mb-2 w-3/4"></div>
              <div className="h-2 bg-[#1a1a1a] rounded w-full"></div>
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
          <BarChart3 size={14} className="text-[#00FFFF]" />
          <h2 className="text-sm font-bold tracking-tight text-[#e0e0e0]">COTACOES AO VIVO</h2>
          <span className="text-[8px] font-mono text-[#444] ml-auto">{items.length} ATIVOS &middot; Q2 2026E</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a]">
          {items.map((item, i) => (
            <div key={i} className="bg-[#0a0a0a] p-4 hover:bg-[#111] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[8px] font-mono uppercase tracking-widest text-[#555]">{item.symbol}</span>
                {item.change_7d_pct !== null && (
                  <span className={`text-[8px] font-mono flex items-center gap-0.5 ${item.change_7d_pct >= 0 ? 'text-[#4ade80]' : 'text-[#FF4444]'}`}>
                    {item.change_7d_pct >= 0 ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                    {item.change_7d_pct >= 0 ? '+' : ''}{item.change_7d_pct}% 7d
                  </span>
                )}
              </div>
              <div className="mb-2">
                <span className="text-lg font-mono font-bold text-[#e0e0e0]">
                  {item.currency === 'USD' ? '$' : item.currency === 'BRL' ? 'R$' : item.currency === 'CNY' ? '¥' : item.currency === 'CNY T' ? '¥' : ''}
                  {item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-[8px] font-mono text-[#444] ml-1">{item.unit}</span>
              </div>
              <p className="text-[9px] text-[#555] leading-relaxed line-clamp-3 mb-2">{item.context}</p>
              <span className="text-[7px] font-mono text-[#444]">{item.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
