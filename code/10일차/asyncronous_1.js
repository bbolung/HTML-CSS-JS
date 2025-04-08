//동기방식 : 입력한 순서대로 하나씩 출력

console.log("=====동기방식======");
console.log("1. 라면 장보기");
console.log("2. 물 끓이기");
console.log("3. 끓는 물에 라면, 스프넣고 익히기");
console.log("4. 완성");

//비동기방식

console.log("=====비동기방식=====");
//3초후에 메소드 안의 함수 실행 -> 다른 console.log 먼저 출력하고 3초 후에 함수 실행
setTimeout(()=> {
    console.log("1. 라면 장보기")
},3000);

console.log("2. 물 끓이기");
console.log("3. 끓는 물에 라면, 스프넣고 익히기");
console.log("4. 완성");