// 사진 더보기를 통해 새로운 창을 z-index로 활용하여 띄우기

// 먼저 버튼을 가져온다
const $moreviewButton1 = document.querySelector('.moreview-button1');
const $moreviewButton2 = document.querySelector('.moreview-button2');
const $moreviewButton3 = document.querySelector('.moreview-button3');
const $moreviewButton4 = document.querySelector('.moreview-button4');
const $moreviewContainer1 = document.querySelector('.moreview-image1-container');
const $moreviewContainer2 = document.querySelector('.moreview-image2-container');
const $moreviewContainer3 = document.querySelector('.moreview-image3-container');
const $moreviewContainer4 = document.querySelector('.moreview-image4-container');
const $moreviewImage1 = document.querySelector('moreview-image1');
const $moreviewImage2 = document.querySelector('moreview-image2');
const $moreviewImage3 = document.querySelector('moreview-image3');
const $moreviewImage4 = document.querySelector('moreview-image4');
// 버튼을 누를 시 발동하는 함수 작성 (토글)
function toggleView1(){
    $moreviewButton1.classList.toggle('clickView');
    $moreviewContainer1.classList.toggle('clickView');
};

function toggleView2(){
    $moreviewButton2.classList.toggle('clickView');
    $moreviewContainer2.classList.toggle('clickView');
};

function toggleView3(){
    $moreviewButton3.classList.toggle('clickView');
    $moreviewContainer3.classList.toggle('clickView');
};

function toggleView4(){
    $moreviewButton4.classList.toggle('clickView');
    $moreviewContainer4.classList.toggle('clickView');
};

$moreviewButton1.addEventListener('click', toggleView1);
$moreviewButton2.addEventListener('click', toggleView2);
$moreviewButton3.addEventListener('click', toggleView3);

// 활성화와 그렇지 않을떄에 각각의 새로운 창을 끄고 키고를 반복시킨다.

// 이벤트를 부른다.