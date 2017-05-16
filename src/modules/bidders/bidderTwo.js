import { getCommonThings } from '../core-common';
import { getConversion } from '../features/currency';
let _increment = 0;
const endpoint = 'http://adpater.one.endpoint/';

export function AdapterOne() {
  return {
    request,
    response
  }
}

export function request() {
  return `Sending request for adapterOne instance ${_increment++} to ${endpoint}`;
}

export function response() {
  return `Handling response for adapterOne instance ${_increment++} with ${getCommonThings()}`;

}
