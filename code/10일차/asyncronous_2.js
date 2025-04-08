//1. 콜백함수(callback)-비동기

function getData(callback){
    setTimeout(()=> callback('콜백으로 처리한 데이터'),1000);
};

getData( (result) => {
    console.log(result);
});