The client is generated using [this library](https://github.com/ferdikoomen/openapi-typescript-codegen).

## Overrides

To enable TLS, we have overriden some of the types and options. There will be a diff on generation and you will manually need to restore those changes. Typically, this mean restoring the client and the core:

```text
npm run generateClient
# review diff
git checkout src/common/open-api/ConductorClient.ts
git checkout src/common/open-api/core
```

Changes are commented with `conductor-client-modification`
