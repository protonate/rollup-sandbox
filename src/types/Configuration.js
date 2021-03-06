

// question: will quoted key names in a pojo get min'ed? That syntax used here
// to suggest this is all just JSON and could either be built in to Prebid or requested from
// CDN, JSON API, etc.

export const Configuration = {
  "configuration": {
    "global": "pbjs",
    "bidderSettings": {},
    "bidderTimeout": 1500,
    "logging": false,
    "publisherDomain": ""
    "CONSTANTS": {
      "JSON_MAPPING": {
        "PL_CODE": "code",
        "PL_SIZE": "sizes",
        "PL_BIDS": "bids",
        "BD_BIDDER": "bidder",
        "BD_ID": "paramsd",
        "BD_PL_ID": "placementId",
        "ADSERVER_TARGETING": "adserverTargeting",
        "BD_SETTING_STANDARD": "standard"
      },
      "REPO_AND_VERSION": "%%REPO_AND_VERSION%%",
      "DEBUG_MODE": "pbjs_debug",
      "STATUS": {
        "GOOD": 1,
        "NO_BID": 2
      },
      "CB": {
        "TYPE": {
          "ALL_BIDS_BACK": "allRequestedBidsBack",
          "AD_UNIT_BIDS_BACK": "adUnitBidsBack",
          "BID_WON": "bidWon",
          "REQUEST_BIDS": "requestBids"
        }
      },
      "objectType_function": "function",
      "objectType_undefined": "undefined",
      "objectType_object": "object",
      "objectType_string": "string",
      "objectType_number": "number",
      "EVENTS": {
        "AUCTION_INIT": "auctionInit",
        "AUCTION_END": "auctionEnd",
        "BID_ADJUSTMENT": "bidAdjustment",
        "BID_TIMEOUT": "bidTimeout",
        "BID_REQUESTED": "bidRequested",
        "BID_RESPONSE": "bidResponse",
        "BID_WON": "bidWon",
        "SET_TARGETING": "setTargeting",
        "REQUEST_BIDS": "requestBids"
      },
      "EVENT_ID_PATHS": {
        "bidWon": "adUnitCode"
      },
      "ORDER": {
        "RANDOM": "random"
      },
      "GRANULARITY_OPTIONS": {
        "LOW": "low",
        "MEDIUM": "medium",
        "HIGH": "high",
        "AUTO": "auto",
        "DENSE": "dense",
        "CUSTOM": "custom"
      },
      "TARGETING_KEYS": [
        "hb_bidder",
        "hb_adid",
        "hb_pb",
        "hb_size",
        "hb_deal"
      ],
      "S2S": {
        "DEFAULT_ENDPOINT": "https://prebid.adnxs.com/pbs/v1/auction"
      }
    }
  }
}
