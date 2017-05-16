const name = 'unknown';

export function Bidder( name ) {
  this.name = name;
  return {
    requestBids,
    receiveBids
  }
}

function requestBids(units) {
  console.log(`requesting bids from ${name}`);
  setTimeout(receiveBids, 5000);
}

function receiveBids(bids) {
  console.log(`receiving bids from ${name}`)
}