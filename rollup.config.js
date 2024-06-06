import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/arrays/index.js',
    output: [
      {
        file: 'dist/arrays/index.js',
        format: 'es',
        name: 'arrays'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      terser(),
      json()
    ]
  },
  {
    input: 'src/schema/index.js',
    output: [
      {
        file: 'dist/schema/index.js',
        format: 'es',
        name: 'schema'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      terser(),
      json()
    ]
  }
];
