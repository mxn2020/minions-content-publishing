![CI](https://github.com/mxn2020/minions-content-publishing-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-content-publishing

**Publish queue, delivery receipts, and mode configuration**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-content-publishing/sdk minions-sdk

# Python
pip install minions-content-publishing

# CLI (global)
npm install -g @minions-content-publishing/cli
```

---

## CLI

```bash
# Show help
content-publishing --help
```

---

## Python SDK

```python
from minions_content_publishing import create_client

client = create_client()
```

---

## Project Structure

```
minions-content-publishing/
  packages/
    core/           # TypeScript core library (@minions-content-publishing/sdk on npm)
    python/         # Python SDK (minions-content-publishing on PyPI)
    cli/            # CLI tool (@minions-content-publishing/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [content-publishing.minions.help](https://content-publishing.minions.help)
- Blog: [content-publishing.minions.blog](https://content-publishing.minions.blog)
- App: [content-publishing.minions.wtf](https://content-publishing.minions.wtf)

---

## License

[MIT](LICENSE)
