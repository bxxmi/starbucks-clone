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
const toTopEl = document.querySelector('#to-top');
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
    // 스크롤 탑 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // gsap 사용 전: badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 스크롤 탑 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

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

// awards 영역 이벤트 함수
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  // 하나의 화면에 보여질 슬라이드 수
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
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

// floating 이미지 이벤트 영역
// 범위 랜덤 함수 (소수점 2자리까지)
function random(min, max) {
  // toFixed()를 통해 반환된 문자 데이터를 
  // parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환 
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    // 무한반복
    repeat: -1,
    // yoyo: 뒤로 재생
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// scrollMagic 이벤트 영역
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
  .Scene({
    // 보여짐 여부를 감시할 요소 지정
    triggerElement: spyEl,
    // 스크롤 처음과 끝의 범위인 0~1 사이의 지점을 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

// 현재 연도를 가져오는 이벤트 
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();