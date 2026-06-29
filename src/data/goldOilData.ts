export interface GoldReserve { year: number; China: number; Russia: number; India: number; Brazil: number; SouthAfrica: number; Turkey: number; Kazakhstan: number; Poland: number; Singapore: number; }
export interface GoldShare { country: string; countryPt: string; flag: string; pct2025: number; }
export interface OilData { year: number; brent: number; wti: number; bricsProduction: number; petroyuanVolume: number; brlOilCorrelation: number; }
export interface ContextBannerData { headline: string; headlinePt: string; date: string; source: string; sourceUrl: string; tag: string; tagPt: string; summary: string; summaryPt: string; }

export const goldReserves: GoldReserve[] = [
  { year: 2015, China: 1743, Russia: 1275, India: 558, Brazil: 67, SouthAfrica: 125, Turkey: 529, Kazakhstan: 203, Poland: 103, Singapore: 127 },
  { year: 2016, China: 1843, Russia: 1465, India: 558, Brazil: 67, SouthAfrica: 125, Turkey: 377, Kazakhstan: 212, Poland: 103, Singapore: 127 },
  { year: 2017, China: 1843, Russia: 1717, India: 558, Brazil: 67, SouthAfrica: 125, Turkey: 565, Kazakhstan: 280, Poland: 103, Singapore: 127 },
  { year: 2018, China: 1843, Russia: 2119, India: 591, Brazil: 67, SouthAfrica: 125, Turkey: 472, Kazakhstan: 314, Poland: 103, Singapore: 127 },
  { year: 2019, China: 1948, Russia: 2269, India: 618, Brazil: 67, SouthAfrica: 125, Turkey: 428, Kazakhstan: 360, Poland: 128, Singapore: 127 },
  { year: 2020, China: 1948, Russia: 2296, India: 668, Brazil: 67, SouthAfrica: 125, Turkey: 547, Kazakhstan: 373, Poland: 231, Singapore: 127 },
  { year: 2021, China: 1948, Russia: 2296, India: 745, Brazil: 80, SouthAfrica: 125, Turkey: 495, Kazakhstan: 390, Poland: 231, Singapore: 154 },
  { year: 2022, China: 2011, Russia: 2296, India: 785, Brazil: 130, SouthAfrica: 125, Turkey: 542, Kazakhstan: 311, Poland: 237, Singapore: 154 },
  { year: 2023, China: 2235, Russia: 2333, India: 801, Brazil: 165, SouthAfrica: 125, Turkey: 540, Kazakhstan: 295, Poland: 359, Singapore: 173 },
  { year: 2024, China: 2280, Russia: 2333, India: 855, Brazil: 180, SouthAfrica: 125, Turkey: 615, Kazakhstan: 300, Poland: 448, Singapore: 177 },
  { year: 2025, China: 2380, Russia: 2400, India: 910, Brazil: 220, SouthAfrica: 125, Turkey: 650, Kazakhstan: 310, Poland: 480, Singapore: 185 },
];

export const goldShare: GoldShare[] = [
  { country: "United States", countryPt: "Estados Unidos", flag: "US", pct2025: 72.4 },
  { country: "Germany", countryPt: "Alemanha", flag: "DE", pct2025: 71.5 },
  { country: "Russia", countryPt: "Russia", flag: "RU", pct2025: 29.2 },
  { country: "China", countryPt: "China", flag: "CN", pct2025: 4.9 },
  { country: "India", countryPt: "India", flag: "IN", pct2025: 9.3 },
  { country: "Brazil", countryPt: "Brasil", flag: "BR", pct2025: 2.8 },
  { country: "Turkey", countryPt: "Turquia", flag: "TR", pct2025: 38.1 },
  { country: "Poland", countryPt: "Polonia", flag: "PL", pct2025: 17.5 },
  { country: "Kazakhstan", countryPt: "Cazaquistao", flag: "KZ", pct2025: 63.2 },
];

export const oilData: OilData[] = [
  { year: 2015, brent: 52.4, wti: 48.7, bricsProduction: 22.1, petroyuanVolume: 0, brlOilCorrelation: 0.72 },
  { year: 2016, brent: 43.7, wti: 43.3, bricsProduction: 22.8, petroyuanVolume: 0, brlOilCorrelation: 0.68 },
  { year: 2017, brent: 54.2, wti: 50.8, bricsProduction: 23.5, petroyuanVolume: 0, brlOilCorrelation: 0.74 },
  { year: 2018, brent: 71.3, wti: 65.2, bricsProduction: 24.2, petroyuanVolume: 0.2, brlOilCorrelation: 0.71 },
  { year: 2019, brent: 64.2, wti: 57.0, bricsProduction: 24.8, petroyuanVolume: 0.5, brlOilCorrelation: 0.65 },
  { year: 2020, brent: 41.7, wti: 39.2, bricsProduction: 23.1, petroyuanVolume: 1.2, brlOilCorrelation: 0.58 },
  { year: 2021, brent: 70.9, wti: 68.1, bricsProduction: 24.5, petroyuanVolume: 3.5, brlOilCorrelation: 0.69 },
  { year: 2022, brent: 99.0, wti: 94.3, bricsProduction: 25.1, petroyuanVolume: 8.2, brlOilCorrelation: 0.78 },
  { year: 2023, brent: 82.6, wti: 77.6, bricsProduction: 26.0, petroyuanVolume: 15.8, brlOilCorrelation: 0.73 },
  { year: 2024, brent: 80.8, wti: 77.1, bricsProduction: 26.8, petroyuanVolume: 25.4, brlOilCorrelation: 0.71 },
  { year: 2025, brent: 72.4, wti: 68.5, bricsProduction: 27.5, petroyuanVolume: 42.0, brlOilCorrelation: 0.69 },
];

export const contextBanner: ContextBannerData = {
  headline: "Brazil Issues First Sovereign Panda Bond in CNY 6 Billion — Landmark Shift from USD Financing",
  headlinePt: "Brasil emite primeiro Panda Bond soberano em CNY 6 bilhoes — Marco na migracao do financiamento em USD",
  date: "2025-06-15", source: "Ministerio da Fazenda / B3 / CFETS", sourceUrl: "https://www.b3.com.br/",
  tag: "GEOPOLITICAL ECONOMY", tagPt: "ECONOMIA GEOPOLITICA",
  summary: "For the first time, Brazil raises sovereign debt denominated in Chinese yuan (CNY) rather than US dollars. This signals a structural shift in emerging market financing: local currency (LC) bonds are replacing dollar-denominated instruments as BRICS nations build parallel financial infrastructure (CIPS, NDB, Bond Connect).",
  summaryPt: "Pela primeira vez, o Brasil levanta divida soberana em yuan chines (CNY) em vez de dolares americanos (USD). Isso sinaliza uma mudanca estrutural no financiamento de mercados emergentes: titulos de Moeda Local (ML) estao substituindo instrumentos denominados em dolar enquanto nacoes BRICS constroem infraestrutura financeira paralela (CIPS, NDB, Bond Connect).",
};
