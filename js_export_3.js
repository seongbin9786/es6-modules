function hello() {
  console.log('hello, i\'m hello function');
}

const hello_arrow = () => {
  console.log('hello, i\'m hello_arrow function');
}

function namedDefault() {
  console.log('hello, i\'m default function');
}

// export default를 아래와 같이 사용할 수도 있습니다.
export { hello_arrow, hello, namedDefault as default };
