/* eslint-disable no-process-env */
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';

const isProd = process.env.NODE_ENV === 'production';

export default {
  entry: 'src/index.js',
  dest: 'lib/index.js',
  format: 'cjs',
  external: [
    'react',
    'styled-components'
  ],
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
    isProd && uglify()
  ],
  watch: {
    exclude: ['node_modules/**']
  }
};
