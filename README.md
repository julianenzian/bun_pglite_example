# Minimal Bun PGLite Failure Example

To reproduce, run these and open http://localhost:3000:

```
bun install
bun dev
```

Results in:

```
Not allowed to load local resource: file:///Users/j/bun_pglite_example/node_modules/@electric-sql/pglite/dist/pglite.wasm
Not allowed to load local resource: file:///Users/j/bun_pglite_example/node_modules/@electric-sql/pglite/dist/pglite.data
Uncaught (in promise) TypeError: Failed to fetch
Uncaught (in promise) TypeError: Failed to fetch
```

Ideally, there would be a way to take advantage of Bun-style asset imports, which result in the .wasm and .data files at:

```
pgliteWasmUrl: /_bun/asset/71cff5d3fbbb0e04.wasm
pgliteDataUrl: /_bun/asset/6be4333aadac69d8.data
```