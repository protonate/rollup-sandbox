export default [{
  entry: 'src/prebid.js',
  dest: 'dist/prebid.js'
}, {
  entry: 'src/modules/**/*.js',
  dest: 'dist/modules.js',
  format: 'umd',
  moduleName: 'prebidModules',
  sourceMap: 'inline',
  intro: '// intro',
  outro: '// outro',
  banner: '// banner',
  footer: '// footer'
}];
