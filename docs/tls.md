Using TLS
---

The client uses `node-fetch` which supports node.js's [`httpsAgent` options](https://nodejs.org/api/https.html#new-agentoptions). For example:

```javascript
import {Agent} from "https"
const agentOptions = {
  key: "<buffer>",
  cert: "<buffer>",
  ca: "<buffer>",
  servername: 'your.server.name',
  // ...
}

const client = new ConductorClient({
  BASE: 'https://your.server.name',
  AGENT: new Agent(agentOptions)
})

const taskManager = new TaskManager(client, [ /* workers */ ])
taskManager.startPolling()
```
