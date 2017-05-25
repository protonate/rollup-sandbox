import { Request } from './request';

export function Auction(configuration) {
  const { bidders } = configuration;
  return new Promise.all(bidders.map(bidder => {
    return new Request(getBidderConfig({ bidder, configuration }))
  })).then(closeAuction(configuration));
}

function getBidderConfig({ bidder, configuration }) {
  // return config for bidder
}

function closeAuction({ callback }) {
  callback();
}