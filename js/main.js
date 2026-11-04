// 1. HTML 문서에서 id가 'draw-btn'인 버튼을 찾아서 'button'이라는 이름의 상자(변수)에 담습니다.
const button = document.getElementById('draw-btn');

// 2. HTML 문서에서 id가 'fortune-text'인 글자 영역을 찾아서 'text'라는 상자에 담습니다.
const text = document.getElementById('fortune-text');

// 3. 직전에 뽑은 운세의 순서(번호)를 기억할 상자를 만듭니다. 처음엔 아무것도 안 뽑았으니 -1로 둡니다.
let lastIndex = -1;

// 4. 'button'을 마우스로 클릭('click')했을 때, 괄호 안의 함수(function)를 실행하라고 명령합니다.
button.addEventListener('click', function() {

    // 5. 0부터 (운세 개수 - 1) 사이의 무작위 숫자 하나를 뽑아 'randomIndex'라는 상자에 담습니다.
    // 번호를 다시 뽑아 값을 바꿔야 할 수 있으므로 const(고정) 대신 let(변경 가능)을 사용합니다.
    let randomIndex = Math.floor(Math.random() * fortunes.length);

    // 6. 방금 뽑은 번호가 직전 번호와 같다면, 다른 번호가 나올 때까지 계속 다시 뽑습니다.
    while (randomIndex === lastIndex) {
        randomIndex = Math.floor(Math.random() * fortunes.length);
    }

    // 7. 마침내 결정된 새로운 번호를 다음번 클릭을 위해 기억해 둡니다.
    lastIndex = randomIndex;

    // 8. js/fortunes.js에 있던 fortunes 목록(배열)에서 방금 뽑은 무작위 숫자 순서에 있는 문구를 꺼냅니다.
    const randomFortune = fortunes[randomIndex];

    // 9. 화면의 글자 영역(text)의 내용(innerText)을 방금 꺼낸 운세 문구로 덮어씁니다.
    text.innerText = randomFortune;

    // 10. 운세가 화면에 나타난 직후, 버튼의 글자를 '다시 뽑기'로 바꿉니다.
    button.innerText = '다시 뽑기';

});