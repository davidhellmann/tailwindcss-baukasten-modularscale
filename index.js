const ModularScale = require('modularscale-js');

module.exports = function({
    sizesMobile = [
      { size: '-2--mobile', value: -2 },
      { size: '-1--mobile', value: -1 },
      { size: '0--mobile', value: 0 },
      { size: '1--mobile', value: 1 },
      { size: '2--mobile', value: 2 },
      { size: '3--mobile', value: 3 },
      { size: '4--mobile', value: 4 },
      { size: '5--mobile', value: 5 },
      { size: '6--mobile', value: 6 },
      { size: '7--mobile', value: 7 },
      { size: '8--mobile', value: 8 },
      { size: '9--mobile', value: 9 },
    ],
    sizesDesktop = [
      { size: '-2', value: -2 },
      { size: '-1', value: -1 },
      { size: '0', value: 0 },
      { size: '1', value: 1 },
      { size: '2', value: 2 },
      { size: '3', value: 3 },
      { size: '4', value: 4 },
      { size: '5', value: 5 },
      { size: '6', value: 6 },
      { size: '7', value: 7 },
      { size: '8', value: 8 },
      { size: '9', value: 9 },
    ],
    baseMobile = 16,
    ratioMobile = 1.1,
    unitMobile = 'px',
    baseDesktop = 20,
    ratioDesktop = 1.25,
    unitDesktop = 'px',
    variants
}) {
    const msMobile = function(sizeMobile) {
        const value = ModularScale(sizeMobile, { baseMobile, ratioMobile });

        if (unitMobile === 'px') {
            return Math.round(value) + unitMobile;
        } else {
            return value.toFixed(2) + unitMobile;
        }
    };

    const msDesktop = function(sizeDesktop) {
        const value = ModularScale(sizeDesktop, { baseDesktop, ratioDesktop });

        if (unitDesktop === 'px') {
            return Math.round(value) + unitDesktop;
        } else {
            return value.toFixed(2) + unitDesktop;
        }
    };

    return function({ addUtilities }) {
        const mobile = sizesMobile.map(({ sizeMobile, valueMobile }) => ({
            [`.ms-${sizeMobile}`]: {
                fontSize: msMobile(valueMobile),
            },
        }));

        const desktop = sizesDesktop.map(({ sizeDesktop, valueDesktop }) => ({
            [`.ms-${sizeDesktop}`]: {
                fontSize: msDesktop(valueDesktop),
            },
        }));

        const utilities = [...mobile, ...desktop];

        addUtilities(utilities, variants);
    }
};
