import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";

export default 
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/bundle.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: 'dist/bundle.esm.js',
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),      
      postcss({
        extract: true,
        minimize: true,
        plugins: [tailwindcss(), autoprefixer()],      
      }),
      terser(),
    ],
    external: ['react', 'react-dom'], 
  };