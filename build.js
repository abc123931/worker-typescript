const { build } = require("esbuild");

build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  platform: "node",
  outfile: "./dist/worker.js",
  minify: false,
}).catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
