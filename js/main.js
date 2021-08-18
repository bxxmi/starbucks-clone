'use strict';

// 통합검색 이벤트 함수
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // const searchInputEl = document.querySelector('.search input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 뱃지 영역 scroll 이벤트 함수
const badgeEl = document.querySelector('header .badges');
// window 객체: 프로젝트가 출력되는 화면 자체를 의미 
// throttle: 이벤트를 일정한 주기마다 발생하도록 함, 스크롤 이벤트 시 함수 호출 부하를 방지하기 위해 자주 사용하는 기능
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
  // scrollY: 스크롤이 위차한 y축의 위치를 반환
  if(window.scrollY > 500) {
    // 배지 숨김
    // gsap 사용 전: badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // gsap 사용 전: badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

// 비주얼 영역 fade-in 이벤트 함수
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // index의 값을 증가시켜 순차적으로 각 요소들의 애니메이션이 동작하도록 지정
    delay: (index + 1) * .7,
    opacity: 1
  });
});