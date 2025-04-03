//함수 선언문
function gugudan() {
    console.log("-함수-");
    for(let i=1; i<=9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
};

//함수 실행 : 함수의 식별자(함수명) 사용
gugudan();

console.log("------------------------------")

//함수 표현식
const gugu = function gugudan2() {
    console.log("-함수표현식-");
    for(let i=1; i<=9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
};

//함수 실행 : 참조변수명으로 호출
gugu();

console.log("------------------------------")

//함수 표현식 -> 익명함수
const gugu2 = function () {
    console.log("-익명함수-");
    for(let i=1; i<=9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
};

//함수 실행 : 참조변수명으로 호출
gugu2();

console.log("------------------------------")

//함수 표현식 -> 화살표함수(람다함수)
const gugu3 = () => {
    console.log("-화살표함수-");
    for(let i=1; i<=9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
};

//함수 실행 : 참조변수명으로 호출
gugu3();