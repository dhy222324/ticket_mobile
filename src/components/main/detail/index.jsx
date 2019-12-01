import React from "react";
import { connect } from "react-redux";
import { DetailStyle } from '@/components/main/detail/styled'
import {
    loadDetailDataAsync,
    loadDetailPriceAsync
} from "@/components/main/detail/actionCreate"
import Detail_time from './detail_time'
import Observer from "./Observer"
import Detail_showId from './detail_showId'


class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            detailData_item_list: {},
            detailData_share_data: {},
            detailData_static_data: {},
            detailData_static_data_city: {},
            detailData_static_data_venue: {},
            detailPrice: [],
            detail_show_id: "",
            detailData_static_data_venue_id: "",
            show_desc: ""
        }
    }
    render() {
        return (
            <DetailStyle>
                <div id="detail">
                    <div className="detail_head" style={{ background: `url("${this.state.detailData_share_data.share_pic}") 50% 50%` }}>
                        <div className="shade">
                            <div className="detail_head_top">
                                <i className="back" onClick={this.toPath.bind(this)}>
                                    <font className="fa fa-chevron-left"></font>
                                </i>
                                <span>演出详情</span>

                                <i className="gohome" onClick={this.toHome.bind(this)}>
                                    <font className="fa fa-home"></font>
                                </i>
                            </div>
                            <div className="detail_head_bottom">
                                <div className="left_pic">
                                    <img src={this.state.detailData_share_data.share_pic} alt="" />
                                </div>
                                <div className="right_text">
                                    <span>{this.state.detailData_share_data.share_title}</span>
                                    <h6 className="right_price">￥{this.state.detailData_static_data.price_range}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="show_msg">
                        <div className="show_msg_time" onClick={this.detailOut.bind(this)} ><b>{this.state.detailData_item_list.project_time}</b> {this.state.detailData_item_list.session_time}  ></div>
                        <div className="show_msg_site"><span>{this.state.detailData_static_data_city.city_name}  |</span>{this.state.detailData_static_data_venue.venue_name}</div>
                        <div className="show_msg_address">{this.state.detailData_static_data_venue.venue_address}</div>
                        <div className="Vip" onClick={this.props.onVip.bind(this)}>
                            <i>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg==" alt="" />
                            </i>
                            <b>专享9.5折起  最高省49元</b>
                            <span>开通99/年  ></span>
                        </div>
                    </div>

                    <div className="attention">
                        <ul>
                            <li onClick={this.props.onVip.bind(this)} style={{ borderTop: "none" }}>
                                <i>开卡送：</i>
                                <span>开通橙PLUS卡</span>
                                <span style={{ color: "red" }}>送￥200 尊享V+权益</span>
                                <b>></b>
                            </li>
                            <li>
                                <i>优惠：</i>
                                <span style={{ color: "red" }}>V+专享活动，指定票价 9.5 折</span>


                            </li>
                            <li>
                                <i>入场:</i>
                                <span>1.2米以上成人票，1.2米以下谢绝入场</span>
                            </li>
                            <li>
                                <i>支持:</i>
                                <span>同城满200免邮</span>
                            </li>
                        </ul>
                    </div>
                    <div className="shop"  >
                        <div className="service">
                            <font className="fa fa-user-o"></font>
                            <p>客服</p>
                        </div>
                        <div className="shopping" onClick={this.detailOut.bind(this)}>
                            选座购买
                        </div>
                    </div>
                    <div>
                        <Detail_showId />
                    </div>
                    <div className="show_desc" >
                        <div className="show_desc_shade">
                            <div className="show_desc_title">演出介绍</div>
                            <div dangerouslySetInnerHTML={{ __html: this.state.show_desc }} />
                        </div>

                    </div>
                </div>
                <Detail_time data={this.state.detailData_item_list} prices={this.state.detailPrice} />
            </DetailStyle>
        )
    }
    componentDidMount() {
        this.props.loadDetailData.bind(this)();
        setTimeout(() => {
            Observer.$emit("show", { show: this.state.detail_show_id, venue: this.state.detailData_static_data_venue_id });
        }, 1000);
        
    }
    toPath() {
        this.props.history.goBack();
    }
    toHome() {
        this.props.toHomes.bind(this)();
    }
    detailOut() {
        Observer.$emit("test", { dis: "inline" });
    }

}
const mapStateToProps = state => {
    return {

    };
};
const mapDispatchToProps = dispatch => {
    return {
        toHomes() {
            this.props.history.push("/index");
        },
        onVip() {
            window.open("https://m.juooo.com/vip/index/1")
        },
        loadDetailData() {
            var id = this.props.match.params.id;
            //全局参数
            dispatch(loadDetailDataAsync(dispatch, id, (res) => {
                let data = res.data.data;
                //console.log(res);
                this.setState({
                    detailData_item_list: data.item_list?data.item_list:[],
                    detailData_share_data: data.share_data,
                    detailData_static_data: data.static_data,
                    detailData_static_data_city: data.static_data.city,
                    detailData_static_data_venue: data.static_data.venue,
                    detail_show_id: data.static_data.show_id,
                    detailData_static_data_venue_id: data.static_data.venue.venue_id,
                    show_desc: data.static_data.show_desc.desc,

                })
            }));
            //价格参数
            dispatch(loadDetailPriceAsync(dispatch, id, (res) => {
                let data = res.data.data;
                let Prices = [];
                for (var i = 0; i < data.list.length; i++) {
                    Prices.push(data.list[i].price);
                }
                this.setState({
                    detailPrice: Prices
                })
            }));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
