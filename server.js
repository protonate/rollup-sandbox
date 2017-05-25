const express = require('express');
const rollup  = require('express-middleware-rollup');
const path    = require('path');

const app = express();
app.use(rollup({
  src: 'src/prebid',
  dest: 'dist/',
  root: __dirname,
  prefix: '/js',
  bundleExtension: '.bundle'
}));
app.use(express.static(path.join(__dirname, '/')));
app.listen(3000);
