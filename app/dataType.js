var num = 100;
var myStr = "Hello";
var myArr = [1, 2, 3, 4, 5];
var myAnyArr = [1, 2, "hello"];
var myConnstants;
(function (myConnstants) {
    myConnstants[myConnstants["pi"] = 3.14] = "pi";
    myConnstants[myConnstants["e"] = 2.73] = "e";
    myConnstants[myConnstants["log2"] = 0.3] = "log2";
    myConnstants[myConnstants["log5"] = 0.7] = "log5";
})(myConnstants || (myConnstants = {}));
console.log('Test enum data type');
var radius = 2;
console.log('2*pi*radius = ' + 2 * myConnstants.pi * radius);

//# sourceMappingURL=dataType.js.map
