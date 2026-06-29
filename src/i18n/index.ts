export type Locale = "pt" | "en" | "zh";
interface T { [k: string]: string | T; }
const pt: T = {
  nav: { title: "G20: LC BONDS", subtitle: "MERCADO DE DIVIDA EM MOEDA LOCAL", toggle: "PT / EN", timeRange: "Periodo", months12: "12M", years3: "3A", years5: "5A", years10: "10A", region: "Regiao", all: "Todos", brics: "BRICS", latam: "LATAM" },
  hero: { headline: "G20 CURRENCY VOLATILITY: LC VS. USD", kpiMarket: "Mercado LC Total", kpiGrowth: "Crescimento (10A)", kpiTrade: "Comercio BRICS em LC", kpiNDB: "NDB LC Disbursed", kpiTCX: "TCX Hedge Acum.", kpiCurrencies: "Moedas TCX", live: "LIVE", ptaxLabel: "BRL/USD Ptax", dividaBruta: "Divida Bruta BR" },
  section1: { title: "BRASIL EM DESTAQUE: PANDA BOND & INFRAESTRUTURA LC", subtitle: "Ponto de virada 2025-2026", infographic: "INFOGRAFICO: FLUXO LC BRASIL-CHINA", flowStep1: "Emissao Panda Bond (B3/CFETS)", flowStep2: "Liquidacao via CIPS", flowStep3: "Conversao CNH↔BRL", flowStep4: "Investimento Infraestrutura", flowStep5: "Hedge via TCX/NDB", readAnalysis: "Leia a analise completa →", embedLabel: "Incorporar", exportPNG: "Exportar PNG", exportPDF: "Exportar PDF", exportJSON: "Exportar JSON", source: "Fonte", estBadge: "⚠️ est.", ndbProgress: "Progresso rumo a meta de 30% (NDB 2026)" },
  section2: { title: "TAMANHO DO MERCADO: BRICS + LATAM LC BONDS", subtitle: "Evolucao 2015-2025 (US$ bi)", seriesBrics: "BRICS", seriesLatam: "LATAM", seriesTotal: "Total", embedLabel: "Incorporar", exportPNG: "Exportar PNG", exportPDF: "Exportar PDF", exportJSON: "Exportar JSON", source: "Fonte", estBadge: "⚠️ est." },
  section3: { title: "VOLATILIDADE CAMBIAL G20: RANKING 2025e", subtitle: "Desvio-padrao anualizado (%)", embedLabel: "Incorporar", exportPNG: "Exportar PNG", exportPDF: "Exportar PDF", exportJSON: "Exportar JSON", source: "Fonte", estBadge: "⚠️ est.", tableTitle: "Vol. Anualizada — Oficial vs. Estimado", currency: "Moeda", official: "Oficial", estimated: "2025e" },
  section4: { title: "TCX: HEDGING DE MOEDA LOCAL", subtitle: "Portfolio outstanding (US$ bi)", seriesHedged: "Hedge Anual", seriesOutstanding: "Portfolio", seriesCurrencies: "Moedas", embedLabel: "Incorporar", exportPNG: "Exportar PNG", exportPDF: "Exportar PDF", exportJSON: "Exportar JSON", source: "Fonte", estBadge: "⚠️ est." },
  section5: { title: "COMPOSICAO DA DIVIDA: LC vs ME", subtitle: "Estrutura por pais (% da divida total)", embedLabel: "Incorporar", exportPNG: "Exportar PNG", exportPDF: "Exportar PDF", exportJSON: "Exportar JSON", source: "Fonte", estBadge: "⚠️ est.", debtToGdp: "Divida-to-PIB", official: "Oficial", estimated: "2025e", vsEst: "vs est." },
  spreads: { title: "DIFERENCIAIS DE TAXA × VOLATILIDADE CAMBIAL", subtitle: "Spread vs USD (bps) e volatilidade FX anualizada (%)", country: "Pais", spread2025e: "2025e bps", trend: "Tendencia", volatility: "Vol. FX (%)", reducing: "Reduzindo", stable: "Estavel", widening: "Ampliando", embedLabel: "Incorporar", exportPNG: "Exportar PNG", exportPDF: "Exportar PDF", exportJSON: "Exportar JSON", source: "Fonte", estBadge: "⚠️ est.", fxLabel: "FX — cambio (foreign exchange)" },
  stability: { title: "GANHO DE ESTABILIDADE ECONOMICA", subtitle: "Score composto de estabilidade vs participacao de divida LC", xAxis: "Participacao Divida ML — 2025e", yAxis: "Score de Estabilidade", embedLabel: "Incorporar", exportPNG: "Exportar PNG", exportPDF: "Exportar PDF", exportJSON: "Exportar JSON", source: "Fonte", estBadge: "⚠️ est." },
  sourceOverlay: { title: "Fonte Primaria", methodology: "Metodologia", lastUpdated: "Atualizado em", close: "Fechar" },
  embedOverlay: { title: "Widget Embed", description: "Copie o codigo iframe para incorporar esta secao:", copy: "Copiar", copied: "Copiado!", close: "Fechar" },
  footer: { compiledBy: "Compilado por", hubstry: "Hubstry Deep Tech", overall: "Overall 720", snapshot: "snapshot Q2 2026", sources: "Fontes primarias", disclaimer: "Valores aproximados; verificar nas fontes primarias antes de publicar." },
  brazilSticky: { label: "BRASIL EM DESTAQUE", lcDebt: "Divida LC (% do total)", fcDebt: "Divida ME (% do total)", trend: "Tendencia 2015→2025", improving: "Melhorando", stable: "Estavel", concerning: "Preocupante" },
};
const en: T = {
  nav: { title: "G20: LC BONDS", subtitle: "LOCAL CURRENCY BOND MARKET", toggle: "EN / PT", timeRange: "Time Range", months12: "12M", years3: "3Y", years5: "5Y", years10: "10Y", region: "Region", all: "All", brics: "BRICS", latam: "LATAM" },
  hero: { headline: "G20 CURRENCY VOLATILITY: LC VS. USD", kpiMarket: "Total LC Market", kpiGrowth: "Growth (10Y)", kpiTrade: "BRICS LC Trade", kpiNDB: "NDB LC Disbursed", kpiTCX: "TCX Hedge Cumul.", kpiCurrencies: "TCX Currencies", live: "LIVE", ptaxLabel: "BRL/USD Ptax", dividaBruta: "Gross Debt BR" },
  section1: { title: "BRAZIL SPOTLIGHT: PANDA BOND & LC INFRASTRUCTURE", subtitle: "2025-2026 Inflection Point", infographic: "INFOGRAPHIC: BRAZIL-CHINA LC FLOW", flowStep1: "Panda Bond Issuance (B3/CFETS)", flowStep2: "Settlement via CIPS", flowStep3: "CNH↔BRL Conversion", flowStep4: "Infrastructure Investment", flowStep5: "Hedge via TCX/NDB", readAnalysis: "Read full analysis →", embedLabel: "Embed", exportPNG: "Export PNG", exportPDF: "Export PDF", exportJSON: "Export JSON", source: "Source", estBadge: "⚠️ est.", ndbProgress: "Progress toward 30% target (NDB 2026)" },
  section2: { title: "MARKET SIZE: BRICS + LATAM LC BONDS", subtitle: "2015-2025 Evolution (US$ bn)", seriesBrics: "BRICS", seriesLatam: "LATAM", seriesTotal: "Total", embedLabel: "Embed", exportPNG: "Export PNG", exportPDF: "Export PDF", exportJSON: "Export JSON", source: "Source", estBadge: "⚠️ est." },
  section3: { title: "G20 CURRENCY VOLATILITY: 2025e RANKING", subtitle: "Annualized standard deviation (%)", embedLabel: "Embed", exportPNG: "Export PNG", exportPDF: "Export PDF", exportJSON: "Export JSON", source: "Source", estBadge: "⚠️ est.", tableTitle: "Ann. Volatility — Official vs. Estimated", currency: "Currency", official: "Official", estimated: "2025e" },
  section4: { title: "TCX: LOCAL CURRENCY HEDGING", subtitle: "Portfolio outstanding (US$ bn)", seriesHedged: "Annual Hedge", seriesOutstanding: "Portfolio", seriesCurrencies: "Currencies", embedLabel: "Embed", exportPNG: "Export PNG", exportPDF: "Export PDF", exportJSON: "Export JSON", source: "Source", estBadge: "⚠️ est." },
  section5: { title: "DEBT COMPOSITION: LC vs FX", subtitle: "Structure by country (% of total debt)", embedLabel: "Embed", exportPNG: "Export PNG", exportPDF: "Export PDF", exportJSON: "Export JSON", source: "Source", estBadge: "⚠️ est.", debtToGdp: "Debt-to-GDP", official: "Official", estimated: "2025e", vsEst: "vs est." },
  spreads: { title: "RATE SPREADS × CURRENCY VOLATILITY", subtitle: "Spread vs USD (bps) and annualized FX volatility (%)", country: "Country", spread2025e: "2025e bps", trend: "Trend", volatility: "FX Vol. (%)", reducing: "Reducing", stable: "Stable", widening: "Widening", embedLabel: "Embed", exportPNG: "Export PNG", exportPDF: "Export PDF", exportJSON: "Export JSON", source: "Source", estBadge: "⚠️ est.", fxLabel: "FX — foreign exchange" },
  stability: { title: "ECONOMIC STABILITY GAINS", subtitle: "Composite stability score vs LC debt share", xAxis: "LC Debt Share — 2025e", yAxis: "Stability Score", embedLabel: "Embed", exportPNG: "Export PNG", exportPDF: "Export PDF", exportJSON: "Export JSON", source: "Source", estBadge: "⚠️ est." },
  sourceOverlay: { title: "Primary Source", methodology: "Methodology", lastUpdated: "Last updated", close: "Close" },
  embedOverlay: { title: "Embed Widget", description: "Copy the iframe code to embed this section:", copy: "Copy", copied: "Copied!", close: "Close" },
  footer: { compiledBy: "Compiled by", hubstry: "Hubstry Deep Tech", overall: "Overall 720°", snapshot: "snapshot Q2 2026", sources: "Primary sources", disclaimer: "Approximate values; verify against primary sources before publication." },
  brazilSticky: { label: "BRAZIL HIGHLIGHT", lcDebt: "LC Debt (% of total)", fcDebt: "FX Debt (% of total)", trend: "Trend 2015→2025", improving: "Improving", stable: "Stable", concerning: "Concerning" },
};
const translations: Record<Locale, T> = { pt, en, zh: en };
let currentLocale: Locale = "pt";
const listeners: Set<() => void> = new Set();
export function setLocale(locale: Locale) { currentLocale = locale; listeners.forEach((cb) => cb()); }
export function getLocale(): Locale { return currentLocale; }
export function subscribe(callback: () => void) { listeners.add(callback); return () => listeners.delete(callback); }
export function t(key: string): string {
  const keys = key.split(".");
  let current: T | string = translations[currentLocale];
  for (const k of keys) { if (typeof current !== "object" || current === null) return key; current = current[k]; }
  return typeof current === "string" ? current : key;
}
export function toggleLocale() { setLocale(currentLocale === "pt" ? "en" : "pt"); }
