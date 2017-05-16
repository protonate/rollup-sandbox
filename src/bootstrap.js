const pbjs = pbjs || function() {};

import { config } from './prebidConfig';

(function Prebid(config) {
  setConfig(config);
  return {
    requestBids() {
      console.log('request bids core');
      this.bidders.forEach(bidder => bidder.requestBids());
    }
  }
})();

new Prebid(prebidConfig);

function getBidders() {}

function setConfig() {
  return 'set config';
}