# GitHub Pages Deployment Setup

## INSTRUCOES DE DEPLOY (PASSO A PASSO)

O arquivo de workflow para GitHub Pages esta pronto abaixo. Voce precisa cria-lo manualmente no repositorio:

### Passo 1: Criar o arquivo
No seu repositorio GitHub, va em:
1. **Add file** → **Create new file**
2. Caminho: `.github/workflows/deploy.yml`
3. Cole o conteudo abaixo

### Passo 2: Habilitar GitHub Pages
1. Va em **Settings** → **Pages**
2. Em **Source**, selecione: **GitHub Actions**
3. Salve

### Passo 3: Executar o workflow
1. Va em **Actions**
2. Clique no workflow "Deploy to GitHub Pages"
3. Clique em **Run workflow**

---

## CONTEUDO DO ARQUIVO `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Copy 3D asset to dist
        run: cp public/3d-infra.jpg dist/ || true

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## URL FINAL

Apos o deploy, seu dashboard estara disponivel em:
**`https://guilherme-machado-ceo.github.io/lc-bonds-dashboard/`**

---

## RESUMO DO QUE FOI ENVIADO (v2.2)

Todos os arquivos do dashboard LC Bonds v2.2 foram enviados com sucesso:

| Arquivo | Status |
|---------|--------|
| `src/data/goldOilData.ts` | ✅ Enviado |
| `src/components/ContextBanner.tsx` | ✅ Enviado |
| `src/components/GoldReservesChart.tsx` | ✅ Enviado |
| `src/components/OilVectorChart.tsx` | ✅ Enviado |
| `src/App.tsx` | ✅ Enviado |
| `src/i18n/index.ts` | ✅ Enviado |
| `vite.config.ts` | ✅ Enviado |
| `.github/workflows/deploy.yml` | ⚠️ Criar manualmente (instrucoes acima) |
