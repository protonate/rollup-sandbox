import './request';
import { version } from '../package.json';

function main () {
  console.log('user agent: ', navigator.userAgent);
  console.log('version: ', version);
}

main();