// rollup.config.js
const builtins = require('rollup-plugin-node-builtins');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');

export default {
  input: 'src/site/admin/previews/blog.js',
  output: {
    file: 'dist/admin/previews/blog.js',
    format: 'esm',
  },
  plugins: [
    nodeResolve({browser:true}),
    commonjs({ignore: ["conditional-runtime-dependency"]}),
    builtins(),
    json()
  ]
};
