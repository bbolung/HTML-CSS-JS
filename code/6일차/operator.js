let a = 10;
let b = ++a;    //++a 먼저 계산 -> a = 11, b = 11
let c = b++;    //b++ 나중에 계산 -> c = 11, b = 12

console.log(a + ", " + b + ", " + c);   //a = 11, b = 12, c = 11