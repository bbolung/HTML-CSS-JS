/*
    동적으로 화면 조작
    1. 메인 영역의 텍스트 타이핑 효과(일정시간 반복)
    2. 헤더 영역의 디자인 변경 효과(스크롤하면 디자인 변경)
    3. 스크롤 이동 효과(헤더 메뉴 클릭 -> 페이지 내부의 다른 영역으로 부드럽게 스크롤 이동)
*/

//텍스트 작성과 삭제 즉시 실행 함수
//span 요소 노드 가져오기
const spanEl = document.querySelector("main h2 span");
//화면에 표시할 문장 배열
const txtArr = ["Web Publisher", "Front-End-Developer", "Web UI Designer", "UX Desinger", "Back-End Developer"];
//배열의 인덱스 초기값
let index = 0;
//화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
let currentTxt = txtArr[index].split("");

//텍스트 입력되는 효과 -> 배열 요소 앞에서부터 한 개씩 출력
function writeTxt(){
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !== 0)
        setTimeout(writeTxt, Math.floor(Math.random()*100));
    else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}

function deleteTxt(){
    curren
}