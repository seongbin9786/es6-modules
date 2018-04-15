// export 키워드를 function 앞에 붙임으로써 다른 모듈에서 import가 가능합니다.
// 단순히 export 키워드만 붙이는 경우 import { hello } from './js_export.js';
// 와 같이 작성해야 합니다.
// ----------------------- Webpack 사용 시 알아야 할 점 -------------------------
// Webpack에는 resolve 옵션이 있는데, 기본적으로 '', '.js', '.jsx' 를 JS로 봅니다.
// JS는 따라서 확장자를 생략해도 됩니다.
// ----------------------------------------------------------------------------
export function hello() {
  console.log('hello, i\'m hello function');
}

// export default는 익명함수여도 됩니다.
// import 할 때는 import 아무이름내맘대로 from './js_export.js'; 로 하시면 됩니다.
export default function() {
  console.log('hello, i\'m default function');
}

// -------------------- 혹시모를 화살표 함수 설명 -------------------------------
// ES6의 Arrow Function(화살표 함수) 입니다.
// (매개변수) => { 함수내용 };
// 매개변수한개이면 => 함수내용한줄이면; <-- 이렇게도 가능합니다.
// ----------------------- 혹시모를 const 설명 ---------------------------------
// 아래는 const라는 상수로 화살표 함수를 할당한 함수 표현식입니다.
// ES6의 표준으로, 변수는 let, 상수는 const로 할당합니다.
// var는... let, const는 블록 레벨 스코프를 지원하여서,
// 다른 프로그래밍 언어와 동일한 스코프를 갖게 됩니다. (var 안녕)
export const hello_arrow = () => {
  console.log('hello, i\'m hello_arrow function');
}
