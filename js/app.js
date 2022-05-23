
// 메뉴 버튼을 눌렀을 때, 밑으로 리스트가 나오도록 설정하기. 참고로 toggle 이란 0과 1을 반복하는 행위. 즉, 클래스가 존재하면 지우고, 없으면 생성하는 것.
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');


// classlist -> DomTokenList(반환값) : 이 안에 많은 메서드가 존재한다.
const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');

};

menuToggleButton.addEventListener('click', toggleMenu);

// 메뉴에 있는 링크를 클릭할 시 메뉴창이 다시 안보여야 한다.
const $listlink = document.querySelector('.list-link');

// event의 경우 클릭시 자동으로 발생되는 매개변수다. 매서드 target을 통해 실제 이벤트가 발생하는 요소로 접근할 수 있다. 
// 즉, 이벤트(클릭)이 실제로 발생한 요소내 클래스에 list-link 포함이라면
const clickList = (event) => {
    if(event.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    }

};

$listlink.addEventListener('click', clickList);

// dark-theme 적용하기 (달 클릭시 해로 바뀌면서 전체 색상 리버스)
const $body = document.body;
const $themeToggleButton = document.querySelector('.theme-toggle-button');

//문제는 사이트를 새로고침 하였을 때, 테마가 다시 리셋 되어버린다는 점. 그래서 사이트 내에 데이터에 저장해야함.
const currentTheme = localStorage.getItem('darkTheme'); // 읽어오기

// localStorage 를 사용하면, 브라우져에 key-value 값을 저장할 수 있음. 세션이 바뀌어도 저장된 데이터 유지. 
// 사이트를 열었을 때, 키값에 다크테마가 있다면, 실제 body에 클래스를 추가해준다. 
if(currentTheme){
    $body.classList.add('dark-theme');
}

// toggle을 통해 dark-theme 내 삭제 및 추가 변화가 발생한다. 
const changeTheme = () => {
    $body.classList.toggle('dark-theme');

    // 만일 클릭을 통해 dark-theme 클래스가 생성이 되었다면.
    if($body.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme', 'active'); // 추가하기. key = darkTheme , value = active
    }else{
        localStorage.removeItem('darkTheme'); // 클릭을 통해 클래스가 사라졌다면, 사이트내 키값도 삭제한다.
    }
}

$themeToggleButton.addEventListener('click', changeTheme);


// 스크롤바 라이브러리가 있길래 한번 사용해 봤습니다. (저도 아직 사용법은 잘...)

const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.summary-title', {origin: 'top'});
sr.reveal('.summary-subtitle', {origin: 'top'});
sr.reveal('.scroll-reveal-left', {origin: 'left'});
sr.reveal('.scroll-reveal-right', {origin: 'right'});
sr.reveal('.tech-skill', {interval: 250});
//sr.reveal('.con1', {origin: 'top', interval: 250});
sr.reveal('.section-nav-container', {origin: 'top', interval: 250});
sr.reveal(`.section-title, .section-subtitle-container`, {origin: 'top', interval: 250});
sr.reveal('.portfolio-card', {interval: 500});
sr.reveal(`.form-container, .footer`, {origin: 'top'});