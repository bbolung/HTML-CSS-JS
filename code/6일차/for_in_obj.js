let arr = ["banana", "apple", "orange"]

for(let i in arr)
    console.log(arr[i]);

console.log("--------------------------");

let obj = {
    kor:80,
    eng:90,
    math:77
}

for(let i in obj) {
    console.log(i);     //키만 출력
    console.log(i + " : " + obj[i]);    //키 : 값
}