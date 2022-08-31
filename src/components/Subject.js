import React, { Component, component } from 'react';

class Subject extends Component {
    render(){ // 함수이지만 클래스 내부 함수는 function 생략 가능
      console.log("Subject render");
      return ( // 컴포넌트는 반드시 하나의 최상위 태그 필요
        // 아래 코드는 JS가 아닌 JSX이며 JSX로 작성하면 create-react-app이 자동으로 JS로 convert 해줌 
        <header> {/* 최상위 태그 */}
          <h1><a href="/">{this.props.title}</a></h1> {/* JSX 문법으로 리팩토링 */}
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;