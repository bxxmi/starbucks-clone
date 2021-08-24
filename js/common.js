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

// 현재 연도를 가져오는 이벤트 
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();