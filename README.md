# 🚆 DB Delay Tracker

> Live departure monitor and delay statistics for Deutsche Bahn stations.

**[Live Demo](https://placeholder.app)** · [Report a Bug](../../issues) · [Request Feature](../../issues)

---

## 🇩🇪 Kurzbeschreibung

Ein einfaches Web-Tool, das Abfahrtszeiten und Verspätungsstatistiken für Deutsche-Bahn-Bahnhöfe anzeigt. Daten werden in Echtzeit über die öffentliche DB-API abgerufen.

---

## Features (v1.0)

- 🔍 Search any Deutsche Bahn station by name
- 🚉 Live departures with real-time delay status
- 📊 Delay statistics — average delay, on-time percentage
- 🌐 Available in English and German

---

## Tech Stack

- **Frontend**: React + TypeScript (Vite)
- **API**: Deutsche Bahn Open API
- **Testing**: Vitest
- **CI/CD**: GitHub Actions → Vercel

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
git clone https://github.com/your-username/db-delay-tracker.git
cd db-delay-tracker
npm install
```

### Running locally

```bash
npm run dev
```

### Running tests

```bash
npm run test
```

---

## Project Structure

```
src/
├── api/        # DB API client — all external calls live here
├── domain/     # Pure business logic — delay calculations, stats
├── ui/         # React components
└── types/      # Shared TypeScript interfaces
tests/
├── unit/       # Domain logic tests
└── integration/# API client tests
```

---

## Roadmap

- [ ] v1.0 — Live departures + delay stats
- [ ] v1.1 — Favorite stations (local storage)
- [ ] v1.2 — Historical delay trends

---

## Contributing

Pull requests are welcome. Please open an issue first to discuss what you'd like to change.

---

## License

[MIT](LICENSE)
