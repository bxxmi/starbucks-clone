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

// 공지사항 영역 이벤트 함수
// new Swiper(선택자, 옵션);
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
}); 

// 프로모션 영역 이벤트 함수
new Swiper('.promotion .swiper-container', {
  // 한 번에 보여줄 슬라이드 개수
  slidesPerView: 3,
  // 슬라이드 사이 여백
  spaceBetween: 10,
  // 1번 슬라이드가 가운데에 보이기
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000 // 5s
  },
  pagination: {
    // el: 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',
    // clickable: 사용자의 페이지 번호 요소 제어 가능 여부
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// 프로모션 토글 이벤트 영역
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});