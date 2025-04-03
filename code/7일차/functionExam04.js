//함수 표현식 -> 화살표함수(람다함수)
const ramda = (num) => {
    return num*num;
};

result = ramda(2);
console.log(`합 결과 : ${result}`);
console.log("------------------------");

//매개변수가 1개인 경우만 () 생략O
const ramda2 = num => {
    return num*num;
}

result = ramda2(2);
console.log(`합 결과: ${result}`);
console.log("------------------------");

//중괄호 안 문장이 1개인 경우만 {} 생략O
//단, 중괄호 안 return 문장이 있으면 {}생략 -> return 삭제
const ramda3 = num => num*num;

result = ramda3(8);
console.log(`합 결과: ${result}`);
console.log("------------------------");
