import React from 'react';
import { withRouter } from 'react-router-dom';
import { Search } from '@/components/main/index/styled';
import { connect } from 'react-redux';
import {
    loadSearchDataAsync,
    getHOtWordDataAsync
} from '../actionCreate';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            hot_search: [],
            input_value: "",
            search_list: []
        }
    }
    render() {
        return (
            <Search className="search_bar">
                <div className="search_box" >
                    <form action="">
                        <em></em>
                        <span className="clear" onClick={this.inpClear.bind(this)}></span>
                        <input type="text" placeholder="搜索热门演出" className="search_txt" ref={x => this.txt = x} value={this.state.input_value} onChange={this.upData_value.bind(this)} />
                    </form>
                    <span className="go_back" onClick={this.goPath.bind(this)}>取消</span>
                </div>
                <div className="hot_search">
                    <h2 ref={y => this.test = y}>热门搜索</h2>
                    <ul className="hot_search_list">
                        {this.state.hot_search.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                        }
                    </ul>
                    <ul className="search_list" >

                   {/* { this.state.search_list.length!==0&this.input_value!=0?  */}
                        {this.state.search_list.map((item, index) => (
                            <li key={index} onClick ={this.props.ToId.bind(this,item.schedular_id)}>
                                <div className="search_list_pic">
                                    <img src={item.pic} alt="" />
                                </div>
                                <ul className="search_list_msg">
                                    <li style={{ color: "red", fontSize: "0.4rem" }}>{item.show_time_top}{item.show_time_bottom}</li>
                                    <li dangerouslySetInnerHTML={{ __html: item.name }} style={{ fontSize: "0.3rem" }}></li>
                                    <li>{item.venue_name}</li>
                                    <li style={{ color: "red", fontSize: "0.4rem" }}>{item.min_price}起</li>
                                </ul>
                            </li>
                        ))}
                         {/* :(<li>
                           <img src={"https://m.juooo.com/static/img/empty_icon.d1aca0e.png"} />
                         </li>) 
                       } */}

                    </ul>
                </div>
            </Search>
        )
    }
    componentDidMount() {
        this.props.getHOtWordData.bind(this)();
    }
    goPath() {
        this.props.history.goBack();
    }
    inpClear() {
        this.txt.value = "搜索热门演出";
        this.test.innerHTML = "热门搜索"
        this.props.getHOtWordData.bind(this)();
        this.state.search_list = [];
        this.setState({
            input_value: "",
        });
    }
    upData_value(e) {
        if (e.target.value === "") {
            this.setState({
                search_list: [],
            })
            this.test.innerHTML = "热门推荐";
        } else {
            this.state.hot_search = [];
            this.test.innerHTML = "搜索";
        }
        var input_value = e.target.value;
        // console.log(input_value, e.target.value)
        this.setState({
            input_value
        })
         this.props.getSearchData.bind(this, input_value,1000)();
    }
}

const mapStateToProps = state => {
    return {
        current_city: state.getIn(["indexReducer", "current_city"])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getHOtWordData() {
            dispatch(getHOtWordDataAsync(res => {
                let data = res.data.data;
                this.setState({
                    hot_search: data,
                })
            }))
        },
        getSearchData(value,wait) {
            // console.log(value)
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
            dispatch(loadSearchDataAsync(dispatch, value, (res) => {
                let data = res.data.data;
                this.setState({
                    search_list: data.list
                })
            }))
        }, wait);
        },
        ToId(id){
            this.props.history.push({pathname:"/detail/"+ id})
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar));