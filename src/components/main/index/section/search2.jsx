import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadSearchDataAsync,
  // getHOtWordDataAsync
} from '../actionCreate';

class Two extends React.Component {
  state = {
    inputVal: "",
    num: 0
  };
  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handelInput.bind(this)}
        />
        <button>取消</button>
      </div>
    );
  }
  handelInput(e) {
    var inputVal = e.target.value;
    this.setState(
      { inputVal },
      this.debounce(this.props.loadSearchDataAsync, 2000)
    );
  }

  debounce(fn, wait) {
    return () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if(this.state.inputVal==="")return; 
        fn(this.state.inputVal);
      }, wait);
    };
  }
  componentDidMount(){
    window.addEventListener("resize",this.throttle(this.testThrottle,1000))

  }


  throttle(fn,wait){
    var last=0;
    return ()=>{
      let current_time=Date.now(); // 1574823583058
      if(current_time-last>wait){
        fn();
        last=Date.now(); //1574823583058
      }
    }
  }

  testThrottle(){
    console.log("run_success");
  }

  getSearchData() {}
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    loadSearchDataAsync(keywords) {
      loadSearchDataAsync(dispatch, { keywords });
      // console.log(this);//this.props
      // this.setState({num:1})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Two));
