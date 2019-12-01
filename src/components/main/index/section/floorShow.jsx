import React from 'react';
import {connect} from 'react-redux';
import { loadFloorShowDataAsync } from '../actionCreate';
import FloorSub from './floorSubShow';

class FloorShow extends React.Component{
    constructor(){
        super();
        this.state={
            floor_list:[]
        }
    }
    render(){
        return (
            <div className="floor_show">
                {
                    this.state.floor_list.length ?
                    this.state.floor_list.map((item,index)=>(
                        <FloorSub key={index} data={item}/>
                    ))
                    : ""
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.loadFloorShowData.bind(this)();
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
        loadFloorShowData(){
            var rel={
                city_id:this.props.current_city.get("city_id")
            }
            dispatch(loadFloorShowDataAsync(dispatch,rel,(res)=>{
                let data=res.data.data;
                // console.log(data)
                this.setState({
                    floor_list:data
                })
            }))
        }
    }
}



export default connect( mapStateToProps, mapDispatchToProps )(FloorShow);