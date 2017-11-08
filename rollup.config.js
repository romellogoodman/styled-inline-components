/* eslint-disable no-process-env */
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const isProd = process.env.NODE_ENV === 'production';

export default {
  entry: 'src/index.js',
  dest: 'lib/index.js',
  format: 'cjs',
  external: ['react', 'styled-components'],
  plugins: [
    json({
      include: ['package.json', 'src/**'],
      exclude: ['node_modules/**'],
      preferConst: true
    }),
    babel({
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    isProd && uglify()
  ],
  watch: {
    exclude: ['node_modules/**']
  }
};
