import React from "react";
import {IndexHome} from "./styled";

import Header from "./section/header";
import TopCom from "./section/topCom";
import HotsRec from "./section/hotsRecommend";
import TourRec from "./section/tourRecommend";
import VipHome from "./section/vipHome";
import FloorShow from "./section/floorShow";
import HotTheatre from "./section/hotTheatre";
import GetShowList from "./section/getShowList";

class Index extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
      return (
        <IndexHome id="home-page">
          <Header/>
          <div className="home_main">
            <TopCom/>
            <HotsRec/>
            <TourRec/>
            <VipHome/>
            <FloorShow/>
            <HotTheatre/>
            <GetShowList/>
          </div>
        </IndexHome>
      )
  }
}

export default Index;
