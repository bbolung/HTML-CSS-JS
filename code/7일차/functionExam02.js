//매개변수O

//함수 선언문
function gugudan(num) {
    console.log("-함수-");
    for(let i=1; i<=9; i++){
        console.log(`${num}*${i} = ${num*i}`);
    }
};

//인수 입력
gugudan(5);

console.log("------------------------------")

//함수 표현식
const gugu = function gugudan2(num) {
    console.log("-함수표현식-");
    for(let i=1; i<=9; i++){
        console.log(`${num}*${i} = ${num*i}`);
    }
};

gugu(7);

console.log("------------------------------")

//함수 표현식 -> 익명함수
const gugu2 = function (num) {
    console.log("-익명함수-");
    for(let i=1; i<=9; i++){
        console.log(`${num}*${i} = ${num*i}`);
    }
};

gugu2(9);

console.log("------------------------------")

//함수 표현식 -> 화살표함수(람다함수)
const gugu3 = (num) => {
    console.log("-화살표함수-");
    for(let i=1; i<=9; i++){
        console.log(`${num}*${i} = ${num*i}`);
    }
};

gugu2(8);