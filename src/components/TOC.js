import React, { Component, component } from 'react'; // 리액트의 Component클래스 로딩 

class TOC extends Component {
    render() {
      console.log("TOC render");
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length) {
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;
      }
      return(
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC; // 외부에서 TOC 클래스 가져다 쓸 수 있음