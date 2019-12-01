import React from 'react';
import ReactDOM from "react-dom";
import { PullToRefresh } from "antd-mobile";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getShowListAsync} from '../actionCreate';
import { ShowList } from '@/components/main/index/styled';

// 下拉加载


class HotsRec extends React.Component{
    state={
        page:1,
        hot_search: [],
        // 下拉加载
        refreshing: false,
        down: true,
        height: document.documentElement.clientHeight,

    }

componentDidMount(){
    // this.props.getShowList.bind(this)();

// 下拉加载
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(
        () =>
        this.setState({
            height: hei
        }),
        0
    );
    this.props.getShowList.call(this, this.state.page);
    console.log(hei)
}

render(){
    // console.log(this.props.getShowList);
    return(
<div>
    <ShowList>
            <PullToRefresh
                damping={60}
                ref={el => (this.ptr = el)}
                style={{
                height: this.state.height,
                // overflow: "auto"
                }}
                indicator={{ deactivate: "上拉可以刷新" }}
                direction={"up"}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                // this.setState({ refreshing: true })
                console.log("run");

                this.setState({page:++this.state.page},()=>{
                    console.log(this.state.page);
                    this.props.getShowListAsync.call(this,this.state.page);
                })

                }}
            >
            <div className="search_list">
                <h2>为你推荐</h2>
                {
                    this.state.hot_search.length ?
                    this.state.hot_search.map((item,index)=>(
                    
                    <div  key={index} className="main" onClick={this.gopath.bind(this,item.cate_parent_id)}>

                    <a href={item.url} style={{color:"black"}}>
                        <div className="search_list_pic">
                            <img src={item.pic} alt="" />
                        </div>
                        <ul className="search_list_msg">
                            <li style={{ fontWeight:600, fontSize: "0.4rem" }}>{item.end_show_time}{item.show_time_bottom}</li>
                            <li style={{fontSize: "0.3rem",lineHeight:"0.5rem",fontWeight:600 }}>{item.name}</li>
                    
                            <span style={{ fontSize: "0.35rem" }}>
                                {item.city_name}|{item.venue_name}
                            </span>
                            <li style={{ color: "red", fontSize: "0.4rem" }}>{item.min_price}起</li>
                        </ul> 
                    </a>
                        </div> 
                    )
                    ): "无"
                    
                }

        </div>
        
        </PullToRefresh>
        </ShowList>

        </div>
    )      
}


gopath(cate_parent_id){
    console.log(this)
    // this.props.history.push(`/detail/${cate_parent_id}`)
}


}

const mapStateToProps=state=>{
return {
    current_city: state.getIn(["indexReducer", "current_city"])  
}
}

const mapDispatchToProps=dispatch=>{
return {
    getShowList() {
        var rel={
            city_id:this.props.current_city.get("city_id"),
            page:this.state.page
        }
        dispatch(getShowListAsync(dispatch,rel,(res) => {
            
            let data = res.data.data;
            this.setState({
                hot_search: data.list,
            })
            // console.log(this.state.hot_search)
        }))
    },
}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HotsRec))

