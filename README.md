# My-First-React

<br>

### React는 무엇인가?

- A JavaScript library for building user interfaces

<br>

### 사용자 인터페이스 (User Interface, UI)

- 사용자와 컴퓨터 프로그램이 서로 상호작용하기 위해 중간에서 서로간의 입력과 출력을 제어해주는 것

<br>

### 프레임워크(Veu) vs 라이브러리(React)

- 가장 큰 차이점은 프로그램의 흐름에 대한 제어 권한.
- 프레임워크는 흐름에 대한 제어 권한을 개발자가 아닌 프레임워크가 가지고 있다.
- 라이브러리는 흐름에 대한 제어를 하지 않고 개발자가 필요한 부분만 필요할 때 가져와서 사용하는 형태다.

<br>

### React의 장점

- 빠른 업데이트와 렌더링 속도
  - 내부적으로 Virtual DOM을 사용. (DOM은 웹페이지를 정의하는 하나의 객체) 
  - 화면이 업데이트된다는 것은 곧 DOM이 수정된다는 말과 동일하다. 기존의 방식으로 화면을 업데이트하려면 DOM을 직접 수정해야 되는데, 이것은 성능에 영향을 크게 미치고 비용도 많이 든다. 반면에 React는 DOM을 직접 수정하지 않고, 업데이트해야 될 최소한의 부분만 찾아서 업데이트한다.
  - ![React Virtual DOM Explained in Simple English - Programming with Mosh](https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?ssl=1) 

- Component-Based
  - Component는 ''구성요소''라는 뜻으로 React는 모든 페이지가 Component로 구성되어 있고, 하나의 Component는 또 다른 Component의 조합으로 이루어져있다.
  - 레고 블록 조립하듯 Component들을 모아서 개발
  - 재사용성(Reusability)이 높다.
    - 개발 기간이 단축된다.
    - 유지 보수가 용이하다.
- 든든한 지원군 (Meta)
- 활발한 지식 공유 & 커뮤니티

<br>

### React의 단점

- 방대한 학습량
  - 기존과는 다른 방식의 UI 라이브러리이기 때문에 배워야할 것이 많다.
- 계속해서 업데이트가 진행된다.
- 높은 상태관리 복잡도
- 검색 엔진 문제

<br>

### JSX - 개념

- A syntax extension to JavaScript
- JavaScript + XML / HTML
- JSX코드 예시
  - `const element = <h1>Hello, world!</h1>;`

<br>

### JSX - 역할

- 내부적으로 XML / HTML 코드를 자바스크립트로 변환하는 과정을 거친다. 그래서 개발자가 JSX로 코드를 작성해도 최종적으로는 자바스크립트 코드가 나온다.
- 위의 설명처럼 변환하는 역할을 하는 것이 `React.createElement()`함수이다.
  - `React.createElement()`의 인자로 type, [props], [...children]이 있다.
- JSX를 사용한 코드

```react
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
)
```

- JSX를 사용하지 않은 코드

```react
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, { toWhat: 'World'}, null),
  document.getElementById('root')
)
```

- 리액트에서 JSX를 쓰는 것이 필수는 아니지만 장점들이 많기 때문에 편리하다. 

<br>

### JSX - 장점

- 간결한 코드

  - 사용한 코드

    - ```react
      <div>Hello {name}</div>

  - 사용하지 않은 코드

    - ```react
      React.createElement('div', null, `Hello ${name}`)

- 가독성이 높아서 버그를 발견하기 쉬움 (유지보수 용이)

- Injection Attacks 방어 (보안성 증가)

  - 입력창에 문자나 숫자같은 일반적인 값이 아닌 소스코드를 입력하여 해당 코드가 실행되도록 만드는 것. 예를 들어, 아이디를 입력하는 입력창에 자바스크립트 코드를 넣었는데 코드가 그대로 실행되어버리면 큰 문제가 생길 것이다. 

  - ```react
    const title = response.potentiallyMaliciousInput;
    
    const element = <h1>{title}</h1>;

  - 위의 코드와 같이 title을 괄호를 이용해서 삽입 및 인베딩하고 있다. 기본적으로 ReactDOM은 렌더링하기 전에 인베딩된 값을 모두 문자열로 변환한다. 따라서 명시적으로 선언되지 않은 값은 괄호 사이에 들어갈 수 없다. 이를 통해 잠재적인 보안 위협을 줄일 수 있다.

<br>

### Elements란?

- React앱을 구성하는 요소
- Elements are the smallest building blocks of React apps.
- 리액트 앱을 구성하는 가장 작은 블록들
- Browser DOM에 존재하는 Elements를 DOM Elements라고 하고, Virtual DOM에 존재하는 Elements를 React Elements라고 한다.

- Elements는 화면에서 보이는 것들을 기술하며 React Elements는 자바스크립트 객체 형태로 존재한다.

<br>

### Elements - 특징

- 불변성 (React Elements are immutable)
  - Elements 생성 후에는 children이나 attributes를 바꿀 수 없다!
  - Component를 붕어빵 틀이라고 생각하고, Elements를 붕어빵이라고 생각하자. 구워진 붕어빵의 속은 바꿀 수 없다.
  - 화면에 변경된 Elements를 보여주려면 새로운 Elements를 만들어야 한다. 그 후 새로운 Elements를 기존의 Elements와 바꿔치기한다.

- Root DOM Node 존재

  - ```react
    <div id="root"></div>

