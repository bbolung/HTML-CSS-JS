/*
스프레드 연산자
*/

let arrA = [1,2,3];
let arrB = [...arrA, 4,5,6];
let arrC = [arrA,4,5,6];

console.log(arrB);
console.log(arrC);

let objA = {
    a:1,
    b:2
};

let objB = {
    ...objA,
    c:3
};

console.log(objB);

let func = (a,b,c) => console.log(a,b,c);

let arr = [10,20,30];

func(...arr);

/*
reset 매개변수
*/

let func2 = (...reset) => console.log(reset);

func2(1,2,3);
func2(1,2,3,4,);
func2(1,2,3,4,5,6,7);


