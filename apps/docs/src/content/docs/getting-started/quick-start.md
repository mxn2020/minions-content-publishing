---
title: Quick Start
description: Get up and running with Minions Content-publishing in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-content-publishing/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_content_publishing import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
content-publishing info
```
