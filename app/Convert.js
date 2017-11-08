var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toInt = function (stringToInt) {
        return parseInt(stringToInt);
    };
    ;
    Convert.toFloat = function (stringToFloat) {
        return parseFloat(stringToFloat);
    };
    return Convert;
}());
;
console.log('Test convert to Int : ' + Convert.toInt('55') * 2);
console.log('Test convert to Float : ' + Convert.toFloat('55.55') * 2);
console.log('Test convert Hex to Int : ' + Convert.toInt('0xFF'));

//# sourceMappingURL=Convert.js.map
