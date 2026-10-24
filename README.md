# 🏛️ Estudo de Caso: Portal de Serviços Públicos Digitais — Prefeitura de Medan (GovTech SPA)

Este repositório contém a implementação em **Single Page Application (SPA)** do portal oficial de serviços públicos digitais da **Prefeitura da Cidade de Medan** (*Pemkot Medan*), inspirado no protótipo de referência [medan.figma.site](https://medan.figma.site/#), integralmente traduzido e localizado para **Português (PT-BR)** (com suporte multilíngue em tempo real para Inglês e Indonésio) e construído com as APIs modernas da Web para animações e transições de estado.

---

## 📌 O Problema e Caso de Uso

Portais governamentais e plataformas de atendimento ao cidadão (*GovTech*) frequentemente sofrem com interfaces fragmentadas, excesso de burocracia visual, baixa acessibilidade e transições bruscas que desorientam usuários de diferentes faixas etárias e níveis de letramento digital.

Este projeto resolve esse cenário através de um **Hub Unificado de Atendimento Digital ao Cidadão**, focado em quatro pilares principais:

1. **Descoberta Rápida por Intenção e Perfil (*Persona-Driven UX*):**
   Um estudante buscando bolsa de estudos, um empresário renovando alvará sanitário ou um idoso agendando consulta médica gratuita possuem jornadas completamente distintas. O portal organiza os serviços tanto por **prioridade e volume de uso** quanto por **perfil demográfico** (*Estudantes*, *Famílias*, *Idosos* e *Empresários*).
2. **Continuidade Visual e Transições de Estado (*Spatial Continuity*):**
   Ao abrir o detalhamento de um serviço público, alternar entre *Notícias* e *Comunicados Oficiais*, ou mudar o tema/idioma do portal, o usuário não perde o contexto espacial graças ao uso da **View Transitions API** (`document.startViewTransition`) combinada com animações dirigidas por rolagem (**CSS Scroll-Driven Animations**).
3. **Transparência Ativa e Prestação de Contas (*Open Government*):**
   Cidadãos precisam acompanhar em tempo real a execução do orçamento público (`₹2.4T`), obras de desenvolvimento (`₹1.2T`), manifestações na ouvidoria (`e-OUVIDORIA`) e conjuntos de dados abertos através de indicadores visuais claros, contadores animados e barras de progresso.
4. **Acessibilidade Universal e Inclusão Digital:**
   Controle nativo de escala tipográfica (`A-`, `A`, `A+`), alternância de contraste (*Modo Claro* / *Modo Escuro*), navegação por teclado com roteamento programático de foco e suporte multilíngue instantâneo (`🇧🇷 PT`, `🇬🇧 EN`, `🇮🇩 ID`).

---

## ✨ Principais Funcionalidades

* **Cabeçalho Inteligente com Busca Preditiva (`Navbar.tsx`):**
  * Efeito de compactação suave ao rolar a página (*Shrinking Header on Scroll*) via CSS `animation-timeline: scroll(block root)` com fallback passivo em JavaScript.
  * Busca instantânea com *autocomplete* de serviços públicos (*RG Digital*, *Pagamento de Impostos*, *Alvará de Funcionamento*, *Ouvidoria*).
  * Menu *dropdown* de categorias, contador de notificações, alternador de tema (*Light/Dark*) e seletor de idioma em tempo real.
* **Hero Section & Serviços Principais (`HeroSection.tsx`):**
  * Destaque imediato para os 4 serviços mais demandados (*Documentos Civis*, *Pagamento de Impostos*, *Alvarás e Licenças* e *Ajuda e Suporte 24/7*), selos de popularidade, pilares de confiança (*Segurança de Dados*, *Processo < 15 min*, *Fácil de Usar*) e indicador de rolagem animado.
* **Acesso Rápido & Métricas Operacionais em Tempo Real (`QuickAccessSection.tsx`):**
  * Cartões interativos com estimativa de tempo de atendimento (`10 minutos`, `5 minutos`, `Tempo real`) e volume de solicitações concluídas no dia (`156 hoje`, `234 hoje`).
  * Painel consolidado com `15.247` serviços concluídos no mês, tempo médio de resposta de `2,3 min`, `98,5%` de satisfação e disponibilidade `24/7`.
* **Atendimento Segmentado por Perfil de Cidadão (`PersonaSection.tsx`):**
  * Trilhas dedicadas para **Estudantes**, **Famílias**, **Idosos** e **Empresários**, conectando cada necessidade específica diretamente ao modal de solicitação online.
* **Central de Notícias e Comunicados Oficiais (`NewsSection.tsx`):**
  * Sistema de abas interativas (*📰 Notícias* e *📢 Comunicados*) com transição suave via `document.startViewTransition` e badges semânticos de prioridade (*Importante* vs. *Informativo*).
* **Agenda Pública e Calendário Interativo (`AgendaSection.tsx`):**
  * Calendário mensal interativo (Junho de 2025) que destaca o dia atual e os dias com eventos públicos (`8`, `10` e `15`). Clicar em uma data filtra e destaca visualmente o compromisso correspondente na lista da Prefeitura.
* **Painel de Transparência Pública & Dados Abertos (`TransparencySection.tsx`):**
  * Cards analíticos de *Relatório Financeiro*, *Orçamento 2025*, *e-OUVIDORIA* e *Dados Abertos* com contadores progressivos (`CountUp`) acionados quando entram na *viewport* e indicadores de variação percentual.
  * Dashboard interativo do **Portal de Transparência em Tempo Real** (*Orçamento Executado*, *Projetos Concluídos* e *Índice de Transparência 9.2*).
* **Voz do Cidadão — Depoimentos e Aspirações (`TestimonialsSection.tsx`):**
  * Relatos verificados de moradores de diferentes regiões e perfis, com avatares (com *fallback* automático para iniciais), avaliação por estrelas e ações para envio de novos depoimentos ou sugestões.
* **Barra de Acessibilidade & Menu Flutuante de Ação Rápida (`Footer.tsx` & `FloatingActions.tsx`):**
  * Painel de acessibilidade no rodapé permitindo redimensionar a fonte global do documento (`14px`, `16px`, `18px`), alternar o modo de exibição e trocar o idioma.
  * Barra superior de progresso de leitura, botão de retorno rápido ao topo e *Floating Action Button (FAB)* expansível com atalhos para **WhatsApp Oficial**, **Relatar Problema** e **Central 24h**.
* **Modal de Solicitação de Serviço com *Shared Element Transition* (`ServiceDetailModal.tsx`):**
  * Ao clicar em qualquer serviço do portal, o cartão selecionado realiza um *morph* visual suave até o modal de atendimento (`view-transition-name: service-hero`), exibindo status online, tempo estimado e requisitos digitais.

---

## 🏗️ Decisões Arquiteturais (Trade-offs)

### 1. View Transitions API (`document.startViewTransition`) para Estado de UI na SPA
* **Por que?** Em uma SPA rica em interações, mudanças abruptas de DOM (como abrir um modal a partir de um card, trocar abas de notícias ou alternar entre modo claro/escuro e idiomas) quebram a percepção de continuidade visual.
* **Prós:** Animações nativas executadas na *top layer* do navegador com interpolação automática de posição e dimensão entre o card clicado (`.service-card-item.selected`) e o modal (`#detail-modal-hero`), sem sobrecarga de bibliotecas pesadas de layout projection.
* **Cuidado de Acessibilidade:** Como a View Transitions API não move o foco do teclado automaticamente, implementamos roteamento programático de foco para o cabeçalho do modal (`#detail-heading`) assim que a promise `transition.finished` resolve, além de limpeza das classes temporárias `.selected` ao fechar.

### 2. CSS Scroll-Driven Animations com Progressive Enhancement
* **Por que?** Vincular animações de entrada/saída de seções e o encolhimento do cabeçalho diretamente à *thread* do compositor via CSS (`animation-timeline: view()` e `animation-timeline: scroll(block root)`) evita *jank* na thread principal de JavaScript.
* **Prós:** 60/120 FPS constantes durante a rolagem em navegadores modernos, respeitando automaticamente `@media (prefers-reduced-motion: no-preference)`.
* **Fallback Determinístico:** Para navegadores que ainda não suportam `@supports ((animation-timeline: view()) and (animation-range: entry))`, o projeto ativa automaticamente um fallback leve baseado em `IntersectionObserver` e listener passivo de `scroll`.

### 3. Internacionalização (i18n) Tipada via React Context (`LanguageContext.tsx`)
* **Por que?** O portal precisava ser 100% traduzido para Português (`pt-BR`) mantendo paridade estrutural completa com os idiomas originais (`en` e `id`), sem depender de arquivos JSON externos assíncronos que pudessem causar *layout shift* durante a troca de idioma.
* **Prós:** Tipagem estrita em TypeScript (`interface Translations`), zero latência ao alternar entre `PT`, `EN` e `ID`, e persistência automática no `localStorage`.

---

## 📂 Estrutura do Projeto

```text
medan-spa/
├── public/
│   └── logo-medan.png               # Brasão oficial da Prefeitura de Medan
├── src/
│   ├── components/
│   │   ├── AgendaSection.tsx        # Calendário interativo e agenda pública
│   │   ├── FloatingActions.tsx      # Barra de progresso, Scroll-to-Top e FAB menu
│   │   ├── Footer.tsx               # Rodapé institucional e Painel de Acessibilidade
│   │   ├── HeroSection.tsx          # Banner principal, CTAs e Serviços Principais
│   │   ├── LoadingScreen.tsx        # Splash screen animada do portal
│   │   ├── Motion.tsx               # Primitivas Reveal (IntersectionObserver) e CountUp
│   │   ├── Navbar.tsx               # Header fixo com busca preditiva e navegação
│   │   ├── NewsSection.tsx          # Abas de Notícias e Comunicados Oficiais
│   │   ├── PersonaSection.tsx       # Jornada de serviços por perfil demográfico
│   │   ├── QuickAccessSection.tsx   # Serviços Prioritários e KPIs operacionais
│   │   ├── ServiceDetailModal.tsx   # Modal de serviço com View Transition e foco acessível
│   │   ├── TestimonialsSection.tsx  # Depoimentos de cidadãos com fallback de avatar
│   │   ├── TransparencySection.tsx  # Orçamento, e-Ouvidoria, Dados Abertos e Portal Real-time
│   │   └── ui.tsx                   # Design System base (Button, Input, Badge, Card, SurfaceCard)
│   ├── context/
│   │   ├── LanguageContext.tsx      # Dicionário completo (PT-BR, EN, ID) e provedor i18n
│   │   └── ThemeContext.tsx         # Provedor Light/Dark mode com View Transitions
│   ├── App.tsx                      # Orquestração da SPA, modais e fallbacks de animação
│   ├── index.css                    # Tokens Tailwind v4, variáveis de tema e keyframes CSS
│   └── main.tsx                     # Ponto de entrada da aplicação React 19
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* **Node.js** 18+ e **npm**

### Passos

1. Acesse o diretório do projeto:
   ```bash
   cd medan-spa
   ```

2. Instale as dependências (caso ainda não estejam instaladas):
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento Vite:
   ```bash
   npm run dev
   ```

4. Para gerar o *bundle* otimizado de produção:
   ```bash
   npm run build
   ```

