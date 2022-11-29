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