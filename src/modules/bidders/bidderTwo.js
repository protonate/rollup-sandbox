import { Bidder } from '../Bidder';
import { getCommonThings } from '../../common';
import { getConversion } from '../plugins/currency';
let _increment = 0;
const endpoint = 'http://adpater.two.endpoint/';

export function bidderTwo() {
  return Bidder.createNew('bidderTwo');

}