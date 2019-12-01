import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends React.Component{
    render(){
        let { current_city } = this.props;
        return (
            <div className="head_nav">
                <div className="head_city" onClick={this.toCityFn.bind(this)}>
                    <strong className="address_icon"></strong>
                    <span className="current_city">{current_city.get("city_name")}</span>
                </div>
                <div className="head_search" onClick={this.toSearchFn.bind(this)}>
                    <img src={require("@/images/nav_icon_search.f194288.png")} alt=""/>
                    <span className="search_txt">搜索热门演出</span>
                </div>
                <div className="head_benefit">
                    <img src={require("@/images/rAoKNV2xTpaAAG0EAAAMOqYZMUo366.gif")} alt=""/>
                </div>
            </div>
        )
    }
    toCityFn(){
        this.props.history.push("/city");
    }
    toSearchFn(){
        this.props.history.push("/search");
    }
}
const mapStateToProps=state=>{
    // console.log(state.toJS())
    return {
        current_city: state.getIn(["indexReducer", "current_city"])
    }
}

const mapDispatchToProps=dispatch=>{
    return {

    }
}



export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header));