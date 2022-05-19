The client is generated using [this library](https://github.com/ferdikoomen/openapi-typescript-codegen).

## Overrides

To enable TLS, we have overriden some of the types and options in the generated `core` files.

Changes are commented with `conductor-client-modification`

## Updating definitions

To update `service` and `model` definitions run:

```text
npm run generateClient:models
```

You may need to restore `open-api/ConductorClient` if there is a diff after this command.

## Updating the core

```
npm run generateClient:core
```

NOTE: There will be a diff on generation and you will manually need to restore those changes. Typically, this mean restoring the client and the core. Typically that will involve something like this:

```
# review diff and see if there are any meaningful changes you want to keep
# If there are no changes then check out
git checkout src/common/open-api/ConductorClient.ts
git checkout src/common/open-api/core
# Otherwise, selectively check out the old parts
```
