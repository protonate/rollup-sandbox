let pbjs = pbjs || {};

import { getCommonThings } from './common';

export function requestBids() {
  console.log(getCommonThings('request module'));
}

requestBids();