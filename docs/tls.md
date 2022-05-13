Using TLS
---

The client uses `node-fetch` which supports node.js's [`httpsAgent` options](https://nodejs.org/api/https.html#new-agentoptions). For example:

```javascript
const agentOptions = {
  key: "<buffer>",
  cert: "<buffer>",
  ca: "<buffer>",
  servername: 'your.server.name',
  // ...
}

const client = new TaskClient({
  baseURL: 'https://your.server.name',
  httpsAgentOptions: agentOptions
})

const taskManager = new TaskManager(client, [ /* workers */ ])
taskManager.startPolling()
```
