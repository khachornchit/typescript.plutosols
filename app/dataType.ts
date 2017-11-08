let num: number = 100;
let myStr: string = "Hello";
let myArr: number[] = [1, 2, 3, 4, 5];
let myAnyArr: any[] = [1, 2, "hello"];

enum myConnstants {
    pi = 3.14,
    e = 2.73,
    log2 = 0.3,
    log5 = 0.7
}

console.log('Test enum data type');
let radius: number = 2;
console.log('2*pi*radius = ' + 2 * myConnstants.pi * radius);