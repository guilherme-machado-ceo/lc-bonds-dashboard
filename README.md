# Overall720 ODIN Dashboard — EM Currency Resilience Intelligence

**Versão:** v2.2  
**Status:** Production (deployed)  
**Tese:** Deep-dive em títulos de dívida soberana em Moeda Local (LC Bonds) — BRICS + LATAM — com infraestrutura financeira, volatilidade cambial e reservas anti-dólar. Produto B2B/B2G complementar ao [ODIN Financial Dashboard](https://hubstry-odin-financial-dashboard.vercel.app).

---

## O que este dashboard NÃO é

Não é um clone do [hubstry-odin-financial-dashboard](https://hubstry-odin-financial-dashboard.vercel.app). O #1 é vitrine panorâmica (News + Climate + Commodities + Macro geral). Este (#2) é **especialista em EM Currency Debt** — profundidade técnica que justifica assinatura.

| Camada | Projeto | Nicho | Modelo |
|--------|---------|-------|--------|
| #1 Vitrine | `hubstry-odin-financial-dashboard` | Panorama geopolítico-macroeconômico | Freemium, zero login |
| **#2 Produto** | **`overall720-odin-dashboard`** | **LC Bonds, NDB, TCX, BRICS swaps** | **Subscription B2B/B2G** |
| #3 Sandbox | `em-dashboard` | Experimentação de stack | Privado |

---

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS (Cyber Noir palette)
- Recharts (data visualization)
- html2canvas + jsPDF (export PNG/PDF/JSON)
- Backend serverless: 3 endpoints (`/api/news`, `/api/climate`, `/api/live-data`)

---

## Features atuais (v2.2)

- **12 seções interativas**: Hero KPIs, Brazil Spotlight, Market Size, Spreads vs USD, Volatility Ranking, TCX Hedging, Debt Composition, Stability Scatter, Gold Reserves, Oil Vector (Petroyuan)
- **PT/EN toggle** com ZH-ready architecture
- **Export PNG/PDF/JSON** por gráfico
- **Source link overlays** com metodologia por fonte
- **Embed widgets** por seção (iframe snippets)
- **Filtro de região**: Todos / BRICS / LATAM
- **LIVE BRL/USD Ptax** badge (BCB)
- **Badges ⚠️ est.** em dados estimados
- **Scroll-reveal animations**

---

## Roadmap Q3 2026

### Sprint 1 (Jul 1-14) — Fundação
- [x] NewsPanel consumindo `/api/news` (Google News RSS curado)
- [x] ClimatePanel consumindo `/api/climate` (risco climático BRICS/LATAM)
- [x] LiveDataPanel consumindo `/api/live-data` (XAU, XAG, WTI, BRENT, USD/BRL, USD/CNY)
- [x] Conectar repo ao GitHub CI/CD (deploy automático por push)

### Sprint 2 (Jul 15-28) — Diferenciação
- [ ] Autenticação (Supabase Auth) — free tier limitado, Pro ilimitado
- [ ] Design tokens compartilhados com #1 (paleta, tipografia, KPI cards)

### Sprint 3 (Jul 29 - Ago 11) — Monetização
- [ ] Stripe subscription — plano Pro mensal
- [ ] Paywall em séries históricas (> 30 dias) e alertas

### Sprint 4 (Ago 12-25) — Profundidade de dados
- [ ] FRED (Federal Reserve Economic Data)
- [ ] BIS Locational Banking Statistics
- [ ] OECD Composite Leading Indicators
- [ ] Upstash Redis cache — TTL 30min news, 6h FX, 24h climate

---

## Backend (3 APIs serverless)

| Endpoint | Fonte | O que retorna |
|----------|-------|---------------|
| `/api/news` | Google News RSS | Notícias curadas por categoria (BRICS, Commodities, China, NDB, Climate) |
| `/api/climate` | IPCC AR6 + agências nacionais | Risco climático por país (severidade, anomalia térmica, drought index, carbon intensity) |
| `/api/live-data` | Alpha Vantage / BCB / PBOC | Cotações ao vivo (ouro, prata, petróleo, FX, swap lines, CIPS volume) |

---

## Fontes de dados

BIS, IMF WEO, CEPAL, Bloomberg, BCB, PBOC, NDB, TCX, CIPS, INPE, IPCC AR6, Alpha Vantage

---

## Dogma editorial

- Siglas densas com contexto mínimo para non-spec-user-friendly
- Dados estimados marcados com ⚠️ est.
- Fonte primária citada em cada indicador
- Tom analítico-frio (Chatham House / Eurasia Group)

---

## Deploy

```bash
npm install
npm run build
vercel --prod
```

**URL:** https://overall720-odin-dashboard.vercel.app

---

## Compilado por

**Hubstry DeepTech** · Overall 720° Registro Editorial  
CEO: Guilherme Gonçalves Machado  
Snapshot Q2 2026
