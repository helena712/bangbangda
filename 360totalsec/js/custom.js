$(document).ready(function(){


var didScroll;

$(window).scroll( function(event){
    didScroll=true; //스크롤 했을 때 didScroll에 변수 값으로 true를 줌
});

setInterval( function(){
    if(didScroll){
        hasScrolled(); //hasScrolled 실행ㅣ
        didScroll = false; //didScroll은 false
    }
}, 250); //250마다 didScroll의 상태를 체크하고 동작 구현 다시 false


var lastScrollTop = 0;
var delta = 5; //이 값보다 더 스크롤 될 경수 동작 실행
var navbarHeight = $("nav").outerHeight(); //엘리먼트의 높이

function hasScrolled(){
    //동작구현

    //math라는 객체는 수학적 임무를 수행 할 수 있게 해줌, math의 함수 ads(x)는 x의 절대값을 내보냄
    var currentSt = $(this).scrollTop(); // 현재 스크롭 값
    if (Math.ads(lastScrollTop-currentSt) <= delta) { //마지막 스크롤 된 위치에서 현재 스크롤한 위치을 뺀것이 delta값 보다 작거나 크면
        return;
    } else if (currentSt > lastScrollTop && currentSt > navbarHeight) {
        //스크롤된 값이 이전보다 크고 헤더높이 보다도 크다면 = 스크롤 다운
        $("nav").removeClass("nav-down").addClass('nav-up');
    } else {
        //스크롤 업
        // 만약 스크롤 한적 없다면
        if (currentSt + $(window).height() < $(document).height()) {
            $('nav').removeClass("nav-up").addClass('nav-down');
        }
    }

    lastScrollTop = currentSt;
}


});
