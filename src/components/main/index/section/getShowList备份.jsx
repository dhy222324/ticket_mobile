    import React from 'react';
    import {connect} from 'react-redux';
    import {withRouter} from 'react-router-dom';
    import {getShowListAsync} from '../actionCreate';
    import { ShowList } from '@/components/main/index/styled';

    class HotsRec extends React.Component{
    constructor(){
        super();
        this.state={
            page:1,
            hot_search: [],
        }
    }
    render(){
        // console.log(this.props.getShowList);
        return(
        <ShowList>
            <div className="search_list">
                    <h2>为你推荐</h2>
                    {
                        this.state.hot_search.length ?
                        this.state.hot_search.map((item,index)=>(
                       
                        <div  key={index} className="main" onClick={this.gopath.bind(this,item.cate_parent_id)}>
                         
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
                           {/* </a> */}
                          </div> 
                        )
                        ): "无"
                        
                    }
            </div>
         </ShowList>
        )      
    }
    componentDidMount(){
        this.props.getShowList.bind(this)();
    }
    gopath(cate_parent_id){
        console.log(this)
        // this.props.history.push(`/detail/${cate_parent_id}`)
        this.props.history.push({pathname:"/detail/"+ cate_parent_id})
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
                console.log(this.state.hot_search)
            }))
        },
    }
    }

    export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HotsRec))

