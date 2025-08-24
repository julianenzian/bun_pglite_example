# Minimal Bun PGLite Failure Example

To reproduce, run these and open http://localhost:3000:

```
bun install
bun dev
```

Results in:

```
db.ts:5 Fetch API cannot load bun://node_modules/@electric-sql/pglite/dist/pglite.wasm. URL scheme "bun" is not supported.
db.ts:5 Fetch API cannot load bun://node_modules/@electric-sql/pglite/dist/pglite.data. URL scheme "bun" is not supported.
Uncaught (in promise) TypeError: Failed to fetch. URL scheme "bun" is not supported.
Uncaught (in promise) TypeError: Failed to fetch. URL scheme "bun" is not supported.
```
