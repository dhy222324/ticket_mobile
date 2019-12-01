import React from "react";
import { Detailtime } from '@/components/main/detail/styled'
import $ from 'jquery'
import Observer from "./Observer"

class Detail_time extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Detailtime>
                <div id="detail_time" >
                    <div className="detail_time_shade" onClick={this.detailOut.bind(this)}></div>
                    <div className="detail_time">
                        <div className="noShow" onClick={this.detailOut.bind(this)}>
                            关闭
                            </div>
                        <div className="select_time">
                            <div className="title">日期</div>
                            <p>{this.props.data.project_time}</p>
                        </div>
                        <div className="select_site">
                            <div className="title">座次</div>
                            <p>{this.props.data.session_time}</p>
                        </div>
                        <div className="select_price">
                            <div className="title">选择价格</div>
                            <ul className="price_col">
                                {this.props.prices.map((item, index) => (
                                    <li key={index} onClick={this.change.bind(this, index)}>{"￥" + item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="shop">
                            <div className="service">
                                <font className="fa fa-user-o"></font>
                                <p>客服</p>
                            </div>
                            <div className="shopping">
                                选座购买
                            </div>
                        </div>
                    </div>
                </div>
            </Detailtime>
        )
    }
    componentWillMount() {
        Observer.$on("test", (res) => {
            const $Odiv = $('#detail_time');
            $Odiv.fadeIn("slow");
        })
    }
    detailOut() {
        const $Odiv = $('#detail_time');
        $Odiv.fadeOut("slow");
    }
    change(inx) {
        var $Ocol = $(".price_col li");
        $Ocol.each(function (n, o) {
            if (n === inx) {
                $Ocol.eq(n).css({ "color": "white", "background": "#feaf92" });
            } else if (n !== inx) {
                $Ocol.eq(n).css({ "background": "#f0f0f0", "color": "black" });
            }
        });
    }
}
export default Detail_time;

