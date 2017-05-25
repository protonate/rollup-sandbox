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
import commonjs from 'rollup-plugin-commonjs';
import rollup from 'rollup';
import fs from 'fs';

var cache;


const bidders = process.argv[process.argv.indexOf('--bidders') + 1].split(',');
console.log('bidders: ', bidders.join(','));

const plugins = process.argv[process.argv.indexOf('--plugins') + 1].split(',');
console.log('plugins: ', plugins.join(','));

bidders.map(bidder => {
  rollup.rollup({
    entry: `src/modules/bidders/${bidder}.js`,
    banner: '// start module ' + bidder,
    footer: '// end module ' + bidder,
    exports: 'named',
    moduleName: `${bidder}Bidder`
  }).then(bundle => {
    console.log(`bundle: ${JSON.stringify(bundle)}`);
    var result = bundle.generate({
      format: 'iife'
    });
    console.log('result: ', result);
    fs.writeFileSync(`dist/modules/bidders/${bidder}`, result.code);
    bundle.write({
      dest: `./dist/modules2/bidders/${bidder}.js`,
      format: 'iife',
      sourceMap: true
    });
  });
});

export default {
      entry: ['src/modules/**/*.js'],
      format: 'iife',
      moduleName: 'pbjs',
      dest: 'dist/modules.js',
      sourceMap: true,
      intro: '// intro',
      banner: `const pbjs = pbjs || {};
      pbjs.cmd = pbjs.cmd || {};
      `,
      footer: '// footer',
      context: 'prebid',
      moduleContext: 'pbjsModules',
      plugins: [
        multiEntry(),
        resolve(),
        json(),
        commonjs(),
        // eslint(),
        buble(),
        // uglify(),
        // gzip(),
        filesize(),
        // serve('dist'),
        // livereload(),
      ]
    }