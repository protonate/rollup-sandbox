        // adUnits module
        (function () {
            let _adUnits = [];
            function adUnit(adUnit) {
                  let _adUnit = adUnit;

                  return {
                        set(adUnit) {
                            return _adUnit = Object.assign(
                                _adUnit,
                                adUnit,
                                { code: adUnit.getSlotElementId() }
                            );
                        },
                        get() {
                            return _adUnit;
                        }
                  };
            }

            pbjs.adUnits = function adUnits() {
                return {
                    create(adUnit) {
                        return _adUnits[_adUnits.push(new adUnit(adUnit))];
                    },
                    get() {
                        return _adUnits;
                    },
                    match({ slot }) {
                        return Object.assign(
                                {
                                    code: slot.adUnitId,
                                    sizes: slot.sizes
                                },
                                _adUnits.map(adUnit => adUnit.get())
                                        .find(adUnit => adUnit.filters || [{"filterEquals": ["adUnitPath"]}]
                                                .find(filter => {
                                                    const fn = Object.keys(filter)[0];
                                                    return this[fn](adUnit, slot, filter[fn])
                                                })));
                    },

                    filterEquals: function(adUnit, slot, fields) {
                        return fields.find(field => {
                            return adUnit[field] === slot[field] && adUnit;
                        });
                    },
                    filterContains: function(adUnit, slot, fields) {
                        return fields.find(field => {
                            return adUnit[field].contains(slot[field]);
                        })
                    },
                    makeAdUnits: function(slots) {
                        slots.forEach(dfp => {
                            const slot = {
                              adUnitPath: dfp.getAdUnitPath(),
                              adUnitId: dfp.getSlotElementId(),
                              sizes: dfp.getSizes()
                            };
                            pbjs.que.push(pbjs.addAdUnits([this.match({ slot })]));
                        });
                    }
                }
            }
        }());

        // adServerTag Module
//        pbjs.adservertag = {
//            defineSlot: function (adUnitPath, sizes, adUnitId) {
//                pbjs.adUnits().makeAdUnit(adUnitPath, sizes, adUnitId);
//                googletag.defineSlot(adUnitPath, sizes, adUnitId).addService(googletag.pubads());
//                return this;
//            },
//            addService: function () { /* no op */ }
//        };

        pbjs.auction = function auction({adUnitsJson}) {
            adUnitsJson.forEach(adUnit => pbjs.adUnits().create(adUnit));
        };

        pbjs.auction({adUnitsJson});