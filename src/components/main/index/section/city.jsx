import React from 'react';
import {connect} from 'react-redux';
import {CityList} from '@/components/main/index/styled';
import {loadCityDataAsync,setCurrentCityDataAsync} from '../actionCreate';

class City extends React.Component{
    constructor(){
        super();
        this.state={
            nodesOffset:[],
            num:-1
        }
    }
    render(){
        let {city_list,current_city} = this.props;
        return (
            <CityList className="index_city">
                <div className="city_head">
                    <span onClick={this.toPath.bind(this)}>&lt; 返回</span>
                    <h3>城市选择</h3>
                </div>
                <div className="city_main">
                    <div className="city_left"
                        onScroll={this.getScroll.bind(this)}//滚动事件
                    >
                        <div className="current_city">
                            <span>当前城市</span>
                            <ul className="city_cell1">
                                <li>{current_city.get("city_name")}</li>
                            </ul>
                        </div>
                        <ul className="city_cell2">
                            {
                                city_list.map((item,index)=>(
                                    <li key={index}>
                                       <span className="city_code">{item.get("id")}</span>
                                       <ul className="city_cell3">
                                           {
                                                item.get("list").map((item,index)=>(
                                                    <li key={index} onClick={this.props.setCurrentCity.bind(this, item)}>
                                                        {item.get("name")}
                                                    </li>
                                                ))
                                           }
                                       </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="city_right">
                        <ul >
                            <li style={{color:(this.state.num==0)?"red":""}} onClick={this.initScroll.bind(this)}>当前</li>
                            {
                                city_list.map((item,index)=>(
                                    <li key={index} style={{color:(index+1)==this.state.num?"red":""}} onClick={this.setScroll.bind(this,index)}>
                                        {item.get("id")}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </CityList>
        )
    }
    componentDidMount(){
        this.props.loadCityList.bind(this)();

        var nodesOffset=[];
        this.scrollTime=setTimeout(() => {
            var nodes = document.querySelectorAll(".city_code");
            nodes.forEach(item => {
                nodesOffset.push(item.offsetTop);
            });
            this.setState({nodesOffset});      
        }, 300);
    }
    toPath(){
        this.props.history.goBack();
    }
    getScroll(e){
        var scrollTop = e.target.scrollTop;
        // console.log(scrollTop)
        var nodesOffset=[0,...this.state.nodesOffset,20000];
        // console.log(this.state.nodesOffset);
        for(let i=0;i<nodesOffset.length;i++){
            let height1=nodesOffset[i];
            let height2=nodesOffset[i+1];

            if(scrollTop>=(height1-45)&&scrollTop<(height2-45)){
                // console.log(i)
                this.setState({num:i})
                break;
            }
        }
    }
    setScroll(index){
        document.querySelector(".city_left").scrollTop=this.state.nodesOffset[index] - 45;
    }
    initScroll(e){
        document.querySelector(".city_left").scrollTop=e.target.offsetTop;
    }
    componentWillUnmount(){
        clearTimeout(this.scrollTime);
    }
}

const mapStateToProps=state=>{
    // console.log(state.toJS())
    return {
        city_list: state.getIn(["indexReducer","city_list"]),
        current_city: state.getIn(["indexReducer","current_city"])
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        loadCityList(){
            dispatch(loadCityDataAsync(dispatch));
        },
        setCurrentCity(item){
            var tempData={
                city_id: item.get("id"),
                abbreviation: item.get("Abbreviation"),
                city_name: item.get("name")
            }
            dispatch(setCurrentCityDataAsync(dispatch,tempData))
            this.props.history.goBack();
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)

