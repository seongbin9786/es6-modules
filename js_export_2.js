function hello() {
  console.log('hello, i\'m hello function');
}

const hello_arrow = () => {
  console.log('hello, i\'m hello_arrow function');
}

export default function() {
  console.log('hello, i\'m default function');
}

// export를 따로 하는 경우, 아래 처럼 작성하셔야 합니다.
// ES6 Destructuring과 관련 있는게 아니고, 문법입니다.
// export 와 export default를 구분하기 위함입니다.
// 참고: https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
export { hello_arrow, hello };
