import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import path from "path";
import fs from "fs";
import typescript from "@rollup/plugin-typescript";
import json from '@rollup/plugin-json';

const PRODUCTION = !process.env.ROLLUP_WATCH;

const projectPath = __dirname;
const inputFile = path.resolve(projectPath, "src/app.ts");

const packageConfigRaw = fs
  .readFileSync(path.resolve(projectPath, "package.json"))
  .toString();
/** @type {{module: string, main: string, dependencies: Object}} */
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
      file: path.resolve(projectPath, packageConfig.main),
      exports: "auto",
      format: "commonjs",
      sourcemap: true,
    }
  ],
  external: Object.keys(packageConfig.dependencies),
  plugins: [
    json(),
    commonjs(),
    resolve({
      browser: true,
      preferBuiltins: true // TODO: why?
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    replace({
      preventAssignment: true, // fix warning
      "process.env.NODE_ENV": JSON.stringify(
        PRODUCTION ? "production" : "development"
      ),
    })
  ],
};

export default options;
