import React from 'react';
import {withRouter,Link} from "react-router-dom";
import { TabBar } from 'antd-mobile';

class TabBarExample extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }


  testTabFn(){

  }
  render() {
    
    return (
      <div style={{ position: 'fixed',width: '100%', bottom: 0 ,zIndex:10}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="orange"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={
              <Link to="/index">  
              <div style={{
                width: '25px',
                height: '25px',
                background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAXVBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNLZYnxAAAAHnRSTlMAoNAGw38S7dr6PK/xXVoj4KQ4JrimkYpzaVAxDuItXUgYAAABA0lEQVRIx+2S646DIBBGR0e8FIvV3i/7vf9jLlk3sAnYwWb/tOH8IiOHwImUybwlk+7R6+klV2FGrVd5BNDqFsDIK926ArqtXWw7oKpXufsWaDY/y00DtPs0zQsDzQzuIBl31eAJyZkLJg8XqdF5jOxULrqc2QRjI0b3mQOC6FJmj48uZhb+GyFzgBydtfv27HTNC7eCEXoaxN9VwkISsJThuEefJNt94Xi6HJPk42WiCEWSXBB9tHz9ur4ulyiznOX/lFmQeVE+AXdBvgOnuHwDqsdT+VEBN4pTAo0uZswf2fzOdAM7WGDYwcNOZnh2Ay1Rn51+IIvqFFkOTj3XlMms4huH9iEk3eJ+9QAAAABJRU5ErkJggg==) center center /  24px 24px no-repeat' }}/>
              </Link>
            }
            
            selectedIcon={
            <div style={{
              width: '25px',
              height: '25px',
              background: 'url(https://m.juooo.com/static/img/tab_icon_home_selected.3d60fa8.png) center center /  24px 24px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
      
            onPress={() => {
              console.log(this.props)
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>


          <TabBar.Item
            icon={
              <Link to="/list">
              <div
              style={{
                width: '25px',
                height: '25px',
                background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAbFBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKgso/AAAAI3RSTlMAoJD249lr8d/OwrSUdCgiEg0Fu6t6Vk5HLevam5qLb1MwLww+CtkAAAEsSURBVEjH7dTLjoIwGIZhoJSjICAieNb3/u9xYuxiBuzfzmI2E94VyedjBEODtbW1P60Ojwgdw9puB4UjNdjspKCIhApQkwX3kARiCfSWKSUPHOWklgVCFw5hxf8Gd1Wy/T5sk6rzxntAR2P7um7HSAN7X9zFvMvLMudd3HniO/SRBkw66uHuiQvYvm40zOM4D5PXNRR+eIJyPpUweeELjPNphIsPbhSn5XZCNR64gttyu0HlgTPSdrm1KZkbH2DzadzAwYl3UH8aa9g5sPnMMvOtIja/bpm5HxGb57LMPEkRJ1DZcAWJiDWqseFGoSUcwzmwdoZYwMDTjp+AiItAqHDgQcKDjM1p87hGP7o+zPkkYnPOaWZpczLacUnWmLeAWRvzb2WUwdraL/oCOmw2A/vD0QUAAAAASUVORK5CYII=) center center /  24px 24px no-repeat' }}/>
             </Link> 
            }
            selectedIcon={
              <div style={{
                width: '25px',
                height: '25px',
                background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAxlBMVEUAAAAjIyMjIyP/Z0P/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNQMSpjNyz/Z0OqTTf/Z0P/Z0P/Z0P/Z0MjIyP/Z0N1PC89Kyf4ZUL8ZkLaXD2jSjWcSDSYRzSCQDFELSjwYkHiXj/CVDq3UTl6PjBkNyxZNCtMMCksJiT0ZEG9UjlfNSwuJiVG/dK4AAAAKXRSTlMAkKDwsPhT8uSVbijfzMO0q3guIhLYDeva2bukm4tpSDDq4dDIwJtxHSBQ4Q8AAAFQSURBVEjH7dTXTgJBGIbhAd3G0kRBOth9dem9We7/poxAjMLOv2OiZ/seTfLlOfqTUXFxcf+aX7tE6LLm661tEZFl62zBgmxCKAtWQYPzkFJiKchrJoeMiiiDo1kgqdTj3Ym2m4ckSPj+Sepaxqcifo7xn+POoD/9Tqb9YccYD4HxaLYFndloDAxNcTdg13q5XLMr6BriOeQTFb6qJPIwN8QrOFfqvJnMuG4m2fx8w8oM9yB3OOWgZ4QX0DqcWrAwwZMN5eOtzGZigAeQCv1DBgY4wCkdbyWHoBuJb8ELGz14jcRX4IeNPrxFYR+q4WsVehHYAzt8tWEk45JDWmlK8/4i4hSc6fAZ9EVcxLrQ4QuLsYRdqCttdQgEDBT0uACIOKuEshHYlrAtY3f3ajcSP2q01TZXxPs7FTmouL+WHudI7+/kcZC3v1aanIqL+0UfDcF5X8Qhh0IAAAAASUVORK5CYII=) center center /  24px 24px no-repeat' }}
              />
            }
            title="影院"
            key="影院"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>



          <TabBar.Item
            icon={
              <Link to="/tick">
              <div style={{
                width: '25px',
                height: '25px',
                 background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAS1BMVEUAAAA4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTU4NTV6K33hAAAAGHRSTlMAsEFw3PLRhDNmCa0UxfDGuo1iUEwvIG1UI89BAAAA5ElEQVRIx+3V626EIBCG4ZGiLKh7cE/v/V9p27Qp22bG2EyadBOefyJfMAIz0jRN89Nu7KniJNXMh37c6dmF7x6mTVSLui4QuyrJg/vnYAS0tUeo800JRmV4T5QNIntlFLot4Q7+NlzS/XfhWaoM+o7OaniAIX89vUBQJuX3Wcr4BeAwrYWnA8BFFOEIDMUOlwE4BtFdIyQ7nCBexXTr6YsVLm8vb7LiBMEKBzjJmjNkK5zh7Av7Ptv5w3xb5TokruPpuhiOK+ksBv+qhjlKr6/o13Zjs9uNLGyy2C3WVFts0zyFV7hJH05/U1+QAAAAAElFTkSuQmCC) center center /  24px 24px no-repeat' }}/>
                 {/* background: 'url(@/components/components/img/home(no).svg)' }}/> */}
              </Link>
            }
            selectedIcon={

              <div style={{
                width: '25px',
                height: '25px',
                background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAwFBMVEUAAAD/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0MjIyMjIyMjIyMjIyMjIyMjIyP+Z0JCLCf/Z0P/Z0MjIyP/Z0MjIyP/Z0P/Z0P/Z0MjIyP/Z0P/Z0P/Z0MvJyX/Z0P/Z0P/Z0P/Z0P/Z0P/Z0MjIyNnOC3IVjueSTX9ZkL2ZEKnTDZUMipLLymMRDL4ZULtYUDTWT3DVTqpTDahSjWORDMuJiWR+xPeAAAALXRSTlMAELDz3DPRhGgF8LqtrI1hUExCQC8gFArFc/306dDMxsB7U0UcFAnrr6yZiiyX6ic2AAABRUlEQVRIx+2Va0/CMBSGj6xcNhiDAYMBIiLgdS/K1bv//19JJslBPaVpjCYmez62fdKm50YZGRkZX8lXHDAq4h23gw+cSl52A3xm71gEJhDvBaByTJH2KO0WFQDpbh8okpEi4AvLHhSRe2RCwRNkIEdhLzExAzTyafIDOewnO+5fX+zkDhGFwyTlGXgU5ZUoF4BCySW6Ts/cAbffzflyDRQEuY4tJxHRpVZ+WGFLnQQaZQDHbRr3NPJiDaDcIJmmShPlSiNvANUkLS0HTptCWV68wWnRAarAGU1k+Qmo0iFqQIlIlpdA7VdkfvbY/tn8YSP7D+NQXViHipPkJrFNEk7P6cA2PbkwJkPLwuCSnMZ9y5LkZuAOrJsBy6Pkb3sYt97Y6M678DRNPza6G8DXjJvzmYEugLx20JkJDCNWgkdsRsa/4B0n/rWAY2vEwQAAAABJRU5ErkJggg==) center center /  24px 24px no-repeat' }}
              />
            }
            title="票夹"
            key="票夹"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          </TabBar.Item>


         <TabBar.Item
            icon={
              // <Link to="/my"></Link>
              { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAflBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMsQtpcAAAAKXRSTlMA8SYH/NKUDwP33sD06dl1ZlxGPR4U4qil7MvIuKufgnpsNrRTTi4XDexg0X0AAAG6SURBVEjH7ZXZeqowFEYJJJF5rqJVq53X+7/gOTW0thaSeF3/G8LerIQ9fDvBTTf9Nb03e5VDrvbN+5VorxO+lOj+CjSukhOkskyZVRX7sostkOsu+niJOp0D24UnuwH03dlwp4GNFx1nINqftlZA5vPnDyBeL42vAh7cbCiR7W9z+98cOuEV6Cm7hpWLfZOIxWQaBfLNAdfm4Omjawe8g27a08HOAZfIaNoTSUoHnLOccy3JHTCoOZcCByxtJ0sHvCSJZ9o2YemAt/A47XmErQM+nHs4Gh/nnj+4WhsK83mFOjw/HxSV2aMAZ3NnUI2LUZnZyyzs6iAJTzHeG/b+lIMwgS5waoDUjJG+qaqmN8MkhcFnCpVQXkQXfti85lBYgKjjbxWuBRRmPzedAqr+LFWtgDT0nr07k+Vz1neLwFuRBoRZC0BH3mg3CIC1eVsDiKHzQtuxvmk9DqZ0rHfrDncAKPYv32+Ml30BMDgC70tANfGlPW4UUPbzpGmk/GjQS/yYm9ab1ROkoa38T5Zcwbq3xLSG1nbVNLaoGtuVUyAia+8IilknbAKrNjD/2/Joh49yFdx00zX6B22TLs3kGFQqAAAAAElFTkSuQmCC' }}
            selectedIcon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABI1BMVEUAAAD/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0MjIyMjIyMjIyMjIyMjIyMjIyMvJiQjIyMjIyMjIyMrJSQjIyMjIyMjIyMjIyMjIyP/Z0P7ZkIjIyMjIyMjIyP/Z0MqJSQjIyP/Z0P/Z0P/Z0M4KSabSDT/Z0MrJSQjIyMjIyP/Z0MjIyMjIyP/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0OtTjc7KifcXD42KSaXRzTAVDrQWTxELSgjIyM2KSbjXj8jIyMjIyP/Z0P/Z0P/Z0P/Z0MjIyP8ZkKnTDZJLymwTjeaSDTtYUDjXj9YMys+KyfRWTw0KCX6ZUL3ZULfXT7cXD68Ujm3UTmURjN4PS9SMipQMSqgSjWORDNELSgV/zliAAAAR3RSTlMA4Pzy9g9GJZX72r+opTwG/enSAvfi3rirkotNHBYSDv74pH127u3n58vHwLSglYF5dmlcLg0F+/n39unfvq6DgXtAODcvKbhg87QAAAIZSURBVEjH7dVnc9owAIBh1SaEPcMm7KRJmr2699DLDkmzk7b//1fUJ3PhOMAyn8P7xZzvHiQkI4tFi55bJ0c7CRPMxM7RyZy06PPwlMdXnIMmDxStJoLBRFXxg6Rbu5RRw0WiwioaUZPILLm0m4CvNLpR8gGbrnQyCKZXWJUL9d3abuNHUnhNCLqZ+R6Yx9b1V80v7V7Wy8cm7OntsoFhjXuat+mQF7zW7WUtDkHOmvErOV49ByGdXTUwl8SpsmN9NTFWNfgQfELk5UT+T3CowVn4Jn765WQfIKvBAYyoqMkp/TYIaLCHlCirgSd6h0eDISEKcmpt0GDDGrkxHQ8wNDhFNZqfapsVUhqcge/T8TlkNHgfPjeGQ41d5F/Y1z3aELcXrEv77vb2rk3X3qkL0D7cQfiituqMYWfD7yIodEXA81H9xgdUD+fS6roCEaEtDBs9NVi/0+12+upjbwBhN6dQANau5FhX/yDg6hxajkOs1RzRZisGcXu19DoNtFuXNr1stYG0Zd1Vyo5W2V71bEm4LpoDVmwcA3JR1zQSNhnhCwAzHHFFvVuoBi0btwaotrz6jQqrQe9vevKp3s29Gj6s2axiAFjrNCf+j502ECg6Hrxp8LxXdIL/qUDa6fDdho23ckbXb2DbYa3A7MuZ9VfA6/SqeS0d6ji9cuLEmk64GSM+E8OjdOwRZk/bWH/h2LoREosWzdN/nqHwmTqXMEYAAAAASUVORK5CYII=' }}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.props.history.push('/mine');
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            
          </TabBar.Item> 
         

       {/* <TabBar.Item
            title="我的"
            key="我的"
            icon={
              <Link to="/my">  
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAflBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMsQtpcAAAAKXRSTlMA8SYH/NKUDwP33sD06dl1ZlxGPR4U4qil7MvIuKufgnpsNrRTTi4XDexg0X0AAAG6SURBVEjH7ZXZeqowFEYJJJF5rqJVq53X+7/gOTW0thaSeF3/G8LerIQ9fDvBTTf9Nb03e5VDrvbN+5VorxO+lOj+CjSukhOkskyZVRX7sostkOsu+niJOp0D24UnuwH03dlwp4GNFx1nINqftlZA5vPnDyBeL42vAh7cbCiR7W9z+98cOuEV6Cm7hpWLfZOIxWQaBfLNAdfm4Omjawe8g27a08HOAZfIaNoTSUoHnLOccy3JHTCoOZcCByxtJ0sHvCSJZ9o2YemAt/A47XmErQM+nHs4Gh/nnj+4WhsK83mFOjw/HxSV2aMAZ3NnUI2LUZnZyyzs6iAJTzHeG/b+lIMwgS5waoDUjJG+qaqmN8MkhcFnCpVQXkQXfti85lBYgKjjbxWuBRRmPzedAqr+LFWtgDT0nr07k+Vz1neLwFuRBoRZC0BH3mg3CIC1eVsDiKHzQtuxvmk9DqZ0rHfrDncAKPYv32+Ml30BMDgC70tANfGlPW4UUPbzpGmk/GjQS/yYm9ab1ROkoa38T5Zcwbq3xLSG1nbVNLaoGtuVUyAia+8IilknbAKrNjD/2/Joh49yFdx00zX6B22TLs3kGFQqAAAAAElFTkSuQmCC' }}/>
              </Link>
            }
            
            selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABI1BMVEUAAAD/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0MjIyMjIyMjIyMjIyMjIyMjIyMvJiQjIyMjIyMjIyMrJSQjIyMjIyMjIyMjIyMjIyP/Z0P7ZkIjIyMjIyMjIyP/Z0MqJSQjIyP/Z0P/Z0P/Z0M4KSabSDT/Z0MrJSQjIyMjIyP/Z0MjIyMjIyP/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0OtTjc7KifcXD42KSaXRzTAVDrQWTxELSgjIyM2KSbjXj8jIyMjIyP/Z0P/Z0P/Z0P/Z0MjIyP8ZkKnTDZJLymwTjeaSDTtYUDjXj9YMys+KyfRWTw0KCX6ZUL3ZULfXT7cXD68Ujm3UTmURjN4PS9SMipQMSqgSjWORDNELSgV/zliAAAAR3RSTlMA4Pzy9g9GJZX72r+opTwG/enSAvfi3rirkotNHBYSDv74pH127u3n58vHwLSglYF5dmlcLg0F+/n39unfvq6DgXtAODcvKbhg87QAAAIZSURBVEjH7dVnc9owAIBh1SaEPcMm7KRJmr2699DLDkmzk7b//1fUJ3PhOMAyn8P7xZzvHiQkI4tFi55bJ0c7CRPMxM7RyZy06PPwlMdXnIMmDxStJoLBRFXxg6Rbu5RRw0WiwioaUZPILLm0m4CvNLpR8gGbrnQyCKZXWJUL9d3abuNHUnhNCLqZ+R6Yx9b1V80v7V7Wy8cm7OntsoFhjXuat+mQF7zW7WUtDkHOmvErOV49ByGdXTUwl8SpsmN9NTFWNfgQfELk5UT+T3CowVn4Jn765WQfIKvBAYyoqMkp/TYIaLCHlCirgSd6h0eDISEKcmpt0GDDGrkxHQ8wNDhFNZqfapsVUhqcge/T8TlkNHgfPjeGQ41d5F/Y1z3aELcXrEv77vb2rk3X3qkL0D7cQfiituqMYWfD7yIodEXA81H9xgdUD+fS6roCEaEtDBs9NVi/0+12+upjbwBhN6dQANau5FhX/yDg6hxajkOs1RzRZisGcXu19DoNtFuXNr1stYG0Zd1Vyo5W2V71bEm4LpoDVmwcA3JR1zQSNhnhCwAzHHFFvVuoBi0btwaotrz6jQqrQe9vevKp3s29Gj6s2axiAFjrNCf+j502ECg6Hrxp8LxXdIL/qUDa6fDdho23ckbXb2DbYa3A7MuZ9VfA6/SqeS0d6ji9cuLEmk64GSM+E8OjdOwRZk/bWH/h2LoREosWzdN/nqHwmTqXMEYAAAAASUVORK5CYII=) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'yellowTab'}
      
            onPress={() => {
              console.log(this.props)
              this.setState({
                selectedTab: 'yellowTab',
                // tintColor="orange"
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>  */}

        </TabBar>
      </div>
    );
  }
}



export default withRouter(TabBarExample);
