import { PGlite } from "@electric-sql/pglite"
import pgliteWasmUrl from "../node_modules/@electric-sql/pglite/dist/pglite.wasm";
import pgliteDataUrl from "../node_modules/@electric-sql/pglite/dist/pglite.data";

console.log('pgliteWasmUrl:', pgliteWasmUrl);
console.log('pgliteDataUrl:', pgliteDataUrl);

const db = new PGlite('idb://my-pgdata');