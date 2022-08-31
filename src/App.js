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
      mode:'welcome',
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
    return (
      <div className="App">
        {/* 부모의 State는 props로 전달 */}
        <Subject 
        title={this.state.subject.title} // 상위 컴포넌트의 State 값을 하위 컴포넌트의 props 값으로 전달하는 것이 핵심
        sub={this.state.subject.sub}>
        </Subject>
        {/*<Subject title="React" sub="For UI"></Subject> <= prop 사용으로 쉽게 값 변경 가능*/}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
