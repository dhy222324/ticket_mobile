import React from "react";
import { DetailshowId } from '@/components/main/detail/styled'
import { connect } from "react-redux";
import { loadDetailShowIdAsync } from "@/components/main/detail/actionCreate"
import Observer from "./Observer"

class Detail_showId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tour_list: [],
        }
    }
    render() {
      
        return (
            <DetailshowId>
                <div id="Detail_showId">
                    <div className="Detail_showId_title">演出城市

                    </div>
                    <div>
                        <ul>
                            {this.state.tour_list.map((item, index) => (
                                <li key={index}>
                                    <h2>{item.city_name}</h2>
                                    <p >{item.show_time}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </DetailshowId>
        )
    }
    componentDidMount() {
        Observer.$on("show", (res) => {
            this.props.loadDetailData.bind(this, res.show, res.venue)();
        });
    }

}
const mapStateToProps = state => {
    return {

    };
};
const mapDispatchToProps = dispatch => {
    return {
        loadDetailData(showId, venue) {
            dispatch(loadDetailShowIdAsync(dispatch, showId, venue, (res) => {
                let data = res.data.data;
                this.setState({
                    tour_list: data.tour_list,
                })
            }))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail_showId);