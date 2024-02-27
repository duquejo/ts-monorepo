### Some useful commands

Executes a `pnpm` command for a specific workspace:
```sh
pnpm --filter @monorepo/foo add typescript -D
```

Executes a single workspace command. (must be created first into the target workspace through package.json)
```sh
pnpm --filter @monorepo/bar build
```