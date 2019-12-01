import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadTopComDataAsync} from '../actionCreate';
import Carousel from './carousel';

class TopCom extends React.Component{
    constructor(){
        super();
        this.state={
           Carousel:[],
           classify_list:[],
           operation_list:[],
           operation_list1:[],
           operation_list2:[]
        }
    }
    render(){
        // console.log(this.state.operation_list2,"111")
        return (
            <div className="top_banner">
                {
                    this.state.Carousel.length ? 
                    <Carousel Carousel={this.state.Carousel}/>
                    : ""
                }
                {
                    this.state.classify_list.length ?
                    <div className="classify_list">
                        <ul >
                            {
                                this.state.classify_list.map((item,index)=>(
                                    <li key={index} onClick={this.toList.bind(this,item.category_id)} >
                                        <div className="to_List">
                                           <img src={item.pic} alt=""/>
                                            <span>{item.name}</span> 
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    : ""
                }
                {
                    this.state.operation_list.length ? 
                    <div className="operation_list">
                        <ul className="operation_top">
                            {
                                this.state.operation_list1.map((item,index)=>(
                                    <li key={index}>
                                        <a href={item.url}>
                                            <dl>
                                                <dt>{item.name}</dt>
                                                <dd dangerouslySetInnerHTML = {{ __html:item.describe }}></dd>
                                            </dl>
                                            <img src={item.pic} alt=""/>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="operation_bottom">
                            {
                                this.state.operation_list2.map((item,index)=>(
                                    <li key={index}>
                                        <a href={item.url}>
                                            <dl>
                                                <dt>{item.name}</dt>
                                                <dd dangerouslySetInnerHTML = {{ __html:item.describe }}></dd>
                                            </dl>
                                            <img src={item.pic} alt=""/>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    : ""
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.loadTopComData.bind(this)()
    }
    toList(category_id){
        let {city_id} = this.props;
        this.props.history.push(`/list?cid=${city_id}&caid=${category_id}`)
    }
}

const mapStateToProps=state=>{
    // console.log(state.toJS())
    return {
        current_city: state.getIn(["indexReducer", "current_city"]),
        city_id: state.getIn(["indexReducer","current_city","city_id"])
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        loadTopComData(){
            var val={
                city_id: this.props.current_city.get("city_id"),
                abbreviation: this.props.current_city.get("abbreviation")
            }
            // console.log(val)
            dispatch(loadTopComDataAsync(dispatch,val,(res)=>{
                let data=res.data.data;
                // console.log(data,"889")
                this.setState({
                    Carousel:data.slide_list,
                    classify_list:data.classify_list,
                    operation_list:data.operation_list,
                    operation_list1:data.operation_list.slice(0,2),
                    operation_list2:data.operation_list.slice(2)
                })
            }))
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TopCom));