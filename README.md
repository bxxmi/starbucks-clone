# starbucks-clone 

패스트캠퍼스 강의를 보고 구현한 스타벅스 랜딩 페이지 클론 프로젝트입니다.

<img width="1420" alt="스크린샷 2021-08-23 오전 10 36 36" src="https://user-images.githubusercontent.com/56878724/130378488-75475144-c106-4a60-9fdf-cba982ccf4fb.png">

<h3>📅 기간</h3>

210813 ~ 210822 (9일)

<h3>⚙️ 개발언어</h3>

`HTML5` `CSS` `JavaScript`

<h3>🛠 리팩토링 목록</h3>

- [x] CSS 파일 분할 (08/23)
- [x] 다중 선택자 :is pseudo selector 사용하기 (08/23)
- [ ] Netlify로 배포하기
- [ ] 로그인 페이지 구현

<h3>❓ 알게된 점</h3>

* 이미지 삽입 시 생기는 baseline은 `display: block` 사용해서 해결한다. 

* CSS에서 구조를 잡기위해 반복해서 사용하는 클래스는 생략이 가능하다

```css
/* 변경 전 */
.visual .inner .title {...}

/* 변경 후 */
.visual .title {...}
```

* 왼쪽/오른쪽으로 치우쳐진 요소의 너비의 절반 크기만큼 다시 당겨오면 화면 정가운데에 위치한다. 

```css
/* e.g. */
margin-left: calc((819px * 3 + 20px) / -2); 
```
