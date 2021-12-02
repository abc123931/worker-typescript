const { build } = require("esbuild");
const alias = require("esbuild-plugin-alias");

build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  platform: "node",
  outfile: "./dist/worker.js",
  minify: false,
  plugins: [
    alias({
      "@prisma/client$": require.resolve("@prisma/client"),
    }),
  ],
}).catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
