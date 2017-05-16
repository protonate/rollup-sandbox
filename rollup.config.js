import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';
import filesize from 'rollup-plugin-filesize';
import gzip from 'rollup-plugin-gzip';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
  entry: process.env.entry,
  format: 'umd',
  moduleName: 'prebid',
  dest: 'dist/prebid.js',
  sourceMap: true,
  plugins: [
    multiEntry(),
    resolve(),
    json(),
    // eslint(),
    buble(),
    uglify(),
    gzip(),
    filesize(),
    serve('dist'),
    livereload()
  ]
};
