class Convert {
    public static toInt(stringToInt: string) {
        return parseInt(stringToInt);
    };

    public static toFloat(stringToFloat: string) {
        return parseFloat(stringToFloat);
    }
};

console.log('Test convert to Int : ' + Convert.toInt('55') * 2);
console.log('Test convert to Float : ' + Convert.toFloat('55.55') * 2);
console.log('Test convert Hex to Int : ' + Convert.toInt('0xFF'));