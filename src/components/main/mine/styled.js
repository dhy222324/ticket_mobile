import styled from "styled-components";

// function r(px){
//     var baseSize=75/2;
//     var px=Number(px);
//     return (px/baseSize).toFixed(2)+"rem";
// }

export const Mine=styled.div`
    
    .top-top{
        width:100%;
        height:5rem;
        background:url(${require("@/images/my-2.png")}) no-repeat;
        background-size: 100%;
        position:relative
    }
     .mine-box{
        position: absolute;
        top:0.04rem;
       left:0;
       right: 0;
        h1{
            height:0.4rem;
            width:90%;
                span{
                    float:right;
                    font-size:0.16rem;
                }
            }
        .mine-top{
            height:3.5rem;
            background:#fff;
            width:90%;
            margin: 0 auto;
            position: relative;
            dl{
                height:2rem;
                margin-left:0.5rem;
                dt{
                    width:2rem;
                    height:2rem;
                    border-radius:50%;
                    float:left;
                    position: absolute;
                    top:0.3rem;
                    left:0.3rem;
                    overflow:hidden;
                   img{
                       width:100%;
                       height:100%;
                   }
                }
                dd{
                    float:left;
                    line-height:0.5rem;
                    margin-top:0.6rem;
                    padding-left:2rem;
                    font-size:r(20);
                    font-weight:700;
                }
            }
            ul{
                display:flex;
                font-size:0.2133rem;
                height:2rem;
                margin-top:0.2rem;
                line-height:0.6rem;
                font-weight:600;
                li{
                    flex:1;
                    width:0.5rem;
                    height:0.5rem;
                
                    i,span{
                        display:block;
                        text-align:center;
                        height:0.rem;
                    }
                }
            }
            p{
                position:absolute;
                right:0;
                top:1.2rem; 
                width:1.5rem;
                padding-left:0.2rem;
                height:0.6rem;
                line-height:0.6rem;
                color:#333;
                background:linear-gradient(-45deg,#f5dea9,#f8d583);
                border-top-left-radius:10px;
                border-bottom-left-radius:10px;
            }
        
        }
        .mine-banner{
                margin-top:0.3rem;
                width:100%;
                img{
                    width:100%;
                    height:100%;
                }
        }
        .mine-code{
            background:#fff;
            height:2rem;
            width:90%;
            margin:0 auto;
            font-size:12px;
            ul{
                display:flex;
                padding-top:0.3rem;
                li{
                    flex:1;
                    text-align: center;
                    height:1.5rem;
                    line-height:0.7rem;
                }
            }
        }
    }
`