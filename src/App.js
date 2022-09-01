import React, { Component, component } from 'react';
import TOC from "./components/TOC"; // TOC 는 해당 경로에서 가져온다는 의미
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

/* 컴포넌트 만들기 */
class App extends Component {
  constructor(props){ // render() 메소드보다 먼저 호출되어 초기화를 담당한다.
    super(props); 
    // 부모인 App은 State라는 내부정보를 사용
    this.state = { 
      mode:'read',
      // State 값 초기화
      subject:{title:'WEB', sub:'World Wide Web!'}, // subject를 State(내부 시스템의 의미)화 하기
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  // render()는 함수를 호출하는 객체가 있으므로 메소드이며 메소드의 this는 객체임 (=속해있는 컴포넌트(App) 자체를 가리킴) 
  render() { // props나 State의 값이 바뀌면 해당되는 Component의 render() 메소드가 재호출된다. => 화면이 다시 그려진다.
    console.log("App render");
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title; // 추후 수정
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);
    return (
      <div className="App">
        {/* 부모의 State는 props로 전달 */}
        {/* <Subject 
        title={this.state.subject.title} // 상위 컴포넌트의 State 값을 하위 컴포넌트의 props 값으로 전달하는 것이 핵심
        sub={this.state.subject.sub}>
        </Subject> */}
        <header> {/* 최상위 태그 */}
        {/* 리액트는 js onclick()과 달리 onClick={} 형태의 이벤트 사용*/}
          <h1><a href="/" onClick={function(e){ // 특징 1. 함수명 없는 사용자 정의함수, 2. 매개변수로 이벤트 객체가 들어옴 
            // 여기서 function()은 메소드가 아니라 함수를 호출하는 객체가 없는 경우인 함수이다.
            // 이러한 함수 내부 this는 undefined이며 this(App 컴포넌트를 가리키는 객체)를 주입하려면 함수 끝에 bind() 사용
            console.log('event in', this);
            e.preventDefault(); // 리로드 막음
            return;

            console.log(e);
            e.preventDefault(); // 리로드 막음
            // 아래 코드 에러 원인 : 1. 함수 안 this는 undefined(bind로 해결) 2. State 변경 시 리액트가 변경 여부를 알 수 있도록 리액트 방식대로 변경해야 함(setState)
            // this.state.mode = 'welcome'; 
            this.setState({
              mode:'welcome' 
            });
          }.bind(this)}>{this.state.subject.title}</a></h1> {/* JSX 문법으로 리팩토링 */}
          {this.state.subject.sub}
        </header>
        {/*<Subject title="React" sub="For UI"></Subject> <= prop 사용으로 쉽게 값 변경 가능*/}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
