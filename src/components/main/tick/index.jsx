import React from 'react';
import { Tickstyle } from "./styled"
class Two extends React.Component{
  render(){
    return (
      <Tickstyle>
      <div className="ticky">
         <div className="nav-top">
              <span onClick={this.goBack.bind(this)}>返回</span>
              {/* 获取导航名称 */}
              <span style={{fontSize:"16px"}}>票夹</span>
              <span>...</span>
          </div>
          <div className="image">
              <img src={"https://m.juooo.com/static/img/ticket_empty.cf4b072.png"} alt="" />
              <p>暂无电子票</p>
          </div>
      </div>
      </Tickstyle>
    )
  }
  goBack(){
    this.props.history.push("/index");
   }
}

export default Two;
