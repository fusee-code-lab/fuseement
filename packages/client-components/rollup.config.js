import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import path from "path";
import fs from "fs";
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from "svelte-preprocess";

const PRODUCTION = !process.env.ROLLUP_WATCH;

const projectPath = __dirname;
const inputFile = path.resolve(projectPath, "lib/index.ts");

const packageConfigRaw = fs.readFileSync(path.resolve(projectPath, "package.json")).toString();
/** @type {{module: string, main: string}} */
const packageConfig = JSON.parse(packageConfigRaw);

/** @type {import('rollup').OutputOptions} */
const umdOptions = {
  name: "fuseements",
  format: "umd",
  sourcemap: true,
  inlineDynamicImports: true,
};

/** @type {import('rollup').RollupOptions} */
const options = {
  input: inputFile,
  output: [
    {
      ...umdOptions,
      file: path.resolve(projectPath, "dist/index.js")
    },
    {
      ...umdOptions,
      file: path.resolve(projectPath, "dist/index.min.js"),
      plugins: [terser()]
    },
    {
      file: path.resolve(projectPath, packageConfig.main),
      exports: "auto",
      format: "commonjs",
      sourcemap: true,
    },
    {
      file: path.resolve(projectPath, packageConfig.module),
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(),
    svelte({
      preprocess: sveltePreprocess(),
      dev: !PRODUCTION,
    }),
    resolve({
      browser: true,
      dedupe: ["sevlte"],
    }),
    replace({
      preventAssignment: true, // fix warning
      "process.env.NODE_ENV": JSON.stringify(
        PRODUCTION ? "production" : "development"
      ),
    })
  ],
};

export default options;