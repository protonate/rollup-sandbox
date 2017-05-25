const bidders = process.argv[process.argv.indexOf('--bidders') + 1].split(',');
const plugins = process.argv[process.argv.indexOf('--plugins') + 1].split(',');
const base = {
  format: 'iife',
  sourceMap: 'inline'
};

export default bidders.map(bidder => {
  return Object.assign({}, base, {
    entry: `src/modules/bidders/${bidder}.js`,
    dest: `dist/modules/bidders/${bidder}.js`,
    moduleName: bidder + 'Bidder'
  })
}).concat(plugins.map(plugin => {
  return Object.assign({}, base, {
    entry: `src/modules/plugins/${plugin}.js`,
    dest: `dist/modules/plugins/${plugin}.js`,
    moduleName: plugin + 'Plugin'
  })
}));
