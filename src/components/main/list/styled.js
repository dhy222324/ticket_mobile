import styled from "styled-components";


// function r(px){
//     var baseSize=75/2;
//     var px=Number(px);
//     return (px/baseSize).toFixed(2)+"rem";
// }


export const CityList=styled.div`
    background: #fff;
    font-size:0.2133rem;
    position: relative;
    background:#fff;
    height:100%;
    overflow:auto;
    .list_nav{
        width: 100%;
        height: 2.3467rem;
        position:fixed;
        top:0;
        left:0;
        background:#fff;
        .nav-top{
            height: 1.16rem;
            display:flex;
            border-bottom:0.0267rem solid #333;
            justify-content:space-between;
            align-items: center;
            padding: 0 0.4rem; 
            font-size: 0.48rem;
            color: #232323;
        }
        .nav_bottom{
            width: 100%;
            height: 1.1733rem;
            display:flex;
            align-items: center;
            .list_swiper{
                flex:1;
                overflow: hidden;
                .swiper-slide{
                    >p{
                        width:100%;
                        height:100%;
                        line-height: 1.1733rem;
                        text-align: center;
                    } 
                }
            }
            >p{
                width: 2rem;
                height: 0.3733rem;
                font-size: 0.3733rem;
                line-height:  0.3733rem;
                text-align: center;
                color: #666;
                border-left: 0.0267rem solid #e0e0e0;
            }
        }
    }
    .list-cargo{
        padding:0.3rem;      
        dl{
            display:flex;
            margin-bottom:0.5333rem;
            dt{
                width:2.84rem;
                height:3.8667rem;
                float:left;
                img{
                    width:100%;
                    height:100%;
                }
            }
            dd{
                flex:1;
                margin-left:0.333rem;
                margin-top:0.1rem;
                span{
                    display:block;
                    line-height:0.6rem;
                    a{
                        color:red;
                    }
                }
            }
        }
    }

    /* 城市 */
    .m-test{
          position:fixed;
          top:1rem;
          right:0;
          z-index:99;
          width:0;
          height:0;
          font-size:0.24rem;
          background:#666;
          overflow: scroll;
          width:0;
          height:0;   
          h2{
              height:1rem;
              line-height:1rem;
              font-weight:600;
              font-size:0.4rem;
             margin-left:0.3rem;
          } 
            ul{
                width:80%;
                float:right;
                background:#fff;
                h4{
                    position:fixed;
                    background:#fff;
                    height:4rem;  
                    bottom:0; 
                    width:80%;
                    p{
                        height:1rem;       
                        position: absolute;
                        width:100%;
                        text-align:center;
                        bottom:0;
                        span{
                            display:inline-block;
                            width:40%;   
                            line-height:1rem;
                        }
                    }
               
            }
                li{
                  
                    width:30%;
                    height:0.8rem;
                    margin:0.1333rem;
                    font-size:0.38rem;
                    line-height:0.8rem;
                    text-align: center;
                    background:#f5f5f5;
                    float:left;

                }
            }
        }
`