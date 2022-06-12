const clock = document.querySelector(".clock-string");
const $todayGreeting = document.querySelector('#todayGreeting');
// HTML 상 id 해당 tag 를 가져온다.

function getClock() {
    const date = new Date(); // 오늘날짜
    const hoursString = String(date.getHours());
    const hours = String(date.getHours()).padStart(2,"0");
		// 구해진 시간을 문자타입으로 수정한 뒤, 시간열이 2자리가 아니라면 앞에 0을 붙인다. 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
    if(Number(hours) >= 6 && Number(hours) < 12){
        $todayGreeting.innerText = `지금은 ${hoursString}시! 좀 더 일찍 일어나 계획을 세웁시다! `;
    }else if(Number(hours) >= 12 && Number(hours) < 18){
        $todayGreeting.innerText = `지금은 ${hoursString}시! 점심밥은 잘 드시고 계신가요?!`;
    }else if(Number(hours) >= 18 && Number(hours) < 24){
        $todayGreeting.innerText = `지금은 ${hoursString}시! 하루를 코딩으로 마무리 할까요~?`;
    }else if(Number(hours) >= 24 && Number(hours) < 6){
        $todayGreeting.innerText = `지금은 ${hoursString}시! 충분한 휴식은 참 중요해요..`;
    }

}

getClock(); 
setInterval(getClock, 1000);

// 시계 클릭 시 아래 시간 뜨도록 하기.
const clockIcon = document.querySelector('#clock-icon');
const clockCotainer = document.querySelector('.clock');

clockIcon.addEventListener('click', () => {
    clockCotainer.classList.toggle('click');
})