import { getBidder } from './prebid';
import { Bid } from './types/Bid';
import { Response } from './response';

let _config;

export function Request(config) {
  _config = config;
  return callBids(done, errors).then()
}

const callBids = () => new Promise((resolve, reject) => getBidder(_config).callBids(createBids()));

const createBids = config => config.map(item => new Bid(item));

const done = () => { }