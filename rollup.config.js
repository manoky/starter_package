import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import packageJson from "./package.json" assert { type: "json" };

const external = [...Object.keys(packageJson.peerDependencies || {})];
export default {
  input: "src/index.ts",
  output: [
    { file: "lib/index.cjs", format: "cjs" },
    { file: "lib/index.esm.js", format: "esm" },
  ],
  plugins: [
    del({ targets: ["lib/*"] }),
    nodeResolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  onwarn: (warning, warn) => {
    if (warning.message.includes(`use client`)) {
      return;
    }
    warn(warning);
  },
  external,
};
