import { Auction } from './auction';

const bidders = {};

export const Prebid = configuration => {
  return {
    requestBids() {
      return new Auction(configuration);
    }
  }
};

export const getBidder = bidder => this.bidders[bidder];
