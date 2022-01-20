// numeral.js locale configuration
// locale : indonesian Indonesia (id)
// author : Titan Hadiyan : http://hadiyan.net

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    numeral.register('locale', 'id', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'r',
            million: 'j',
            billion: 'm',
            trillion: 't'
        },
        ordinal : function (number) {
            return '.';
        },
        currency: {
            symbol: 'Rp'
        }
    });
}));
