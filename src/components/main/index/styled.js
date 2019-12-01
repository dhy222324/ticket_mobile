import styled from "styled-components";
// function r(px){
//     var baseSize=75/2;
//     var px=Number(px);
//     return (px/baseSize).toFixed(2)+"rem";
// }

const IndexHome = styled.div`
    height: 100%;
    overflow:auto; 
    /* header */
    .head_nav{
        background: rgba(255,255,255,0);
        height:1.1733rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 0 0.4rem;
        position: fixed;
        left:0;
        right:0;
        top:0;
        z-index:10;
        /* 城市选择 */
        .head_city{
            width: 1.6rem;
            height: 0.8rem;
            border: 0.0267rem solid #4f5886;
            border-radius: 0.4rem;
            background: rgba(0,0,0,.5);
            display:flex;
            justify-content:center;
            align-items:center;
            .address_icon{
                display: block;
                width: 0.2933rem;
                height: 0.3467rem;
                margin-right: 0.08rem;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAMAAACEqFxyAAAAXVBMVEUAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7ro0NvAAAAHnRSTlMA+eslChdO2MS2h29oVjqAdu/e27qvpYxbQi0HAUsWcjORAAAAt0lEQVQoz2WR2Q6EMAhFEetarbuOy/D/nzkRadHxvBBOGugNcJG0IxLh2CagmCUiIVqMt3FGN7JYLNIDZG/krZKdc0p6UQIksq23ztle9iZgiZkMD5yIsVBwHYx8deC2AORagVBdnwFiNq83YkTHIZrojkvtdc1tBznX/LjsIS00IQFotsYPo8LtuysorJrpxXxeAP8t8i3W6GmjFZj2qRtNfKOCQKq3TNWq57hv/1GjXq3yRdQJP70QJWgxEHBwAAAAAElFTkSuQmCC) no-repeat;
                background-size: cover;
                background-position: 50%;
            }
            .current_city{
                display: flex;
                width:0.8rem;
                height:0.4rem;
                text-align:center;
                line-height:0.4rem;
                color:#fff;
                font-size: 0.3733rem;
                font-weight: bold;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;  
            }
        }
        .city_cell2,.city_right{
            font-size:16px;
        } 



        /* 搜索 */
        .head_search{
            width:6.4rem;
            height: 0.8rem;
            border: 0.0267rem solid #4f5886;
            border-radius: 0.4rem;
            background: rgba(0,0,0,.5);
            display:flex;
            align-items:center;
            img{
                display:block;
                width:0.3467rem;
                height:0.3467rem;
                margin: 0 0.2133rem 0 0.4rem;
            }
            .search_txt{
                font-size: 0.32rem;
                color:#fff;
            }
        }
        /* 优惠 */
        .head_benefit{
            img{
                display:block;
                width:0.72rem;
                height:0.6667rem;
            }
        }
    }

    .home_main{
        padding-bottom:1.3333rem;
        /* TopCom */
        .top_banner{
            /* 轮播 */
            .ban_con{
                margin:0;
            }
            /* classify_list */
            .classify_list{
                /* height:3.36rem; */
                background:#fff;
                ul{
                    height:100%;
                    flex-wrap:wrap;
                    display:flex;
                    justify-content:space-around;
                    >li{
                        display:flex;
                        width:20%;
                        justify-content:center;
                        align-items:center;
                        .to_List{
                            img{
                            width: 1.2rem;
                            display:block;
                            margin-bottom: 0.3467rem;
                            }
                            span{
                                color:#232323;
                                display:block;
                                width:100%;
                                font-size:0.3467rem;
                                text-align:center;
                            }
                        }
                    } 
                }
            }
            /* operation_list */
            .operation_list{
                box-sizing:border-box;
                height:6.6133rem;
                padding:0.8rem 0.4rem 0;
                background:#fff;
                .operation_top{
                    display:flex;
                    justify-content:space-between;
                    margin-bottom:0.16rem;
                    >li{
                        box-shadow:0px 0px 20px #f5f605;
                        a{
                            display:block;
                            box-sizing:border-box;
                            width:4.5333rem;
                            height:2.4rem;
                            background:#fff;
                            border-radius:0.0533rem;
                            padding-top:0.7467rem;
                            dl{
                                float:left;
                                width:2.1333rem;
                                margin: 0 0.3333rem 0 0.4533rem;
                                dt{
                                    color:#232323;
                                    font-size:0.3733rem;
                                    font-weight:bold;
                                    line-height:0.3733rem;
                                }
                                dd p{
                                    color:#666;
                                    font-size:0.2933rem;
                                    line-height:0.5333rem;
                                    span{
                                        color:#ff8243;
                                    }
                                }
                            }
                            img{
                                float:left;
                                width:1.0933rem;
                                height:1.0933rem;
                            }
                        }
                    } 
                }
                .operation_bottom{
                    display:flex;
                    justify-content:space-between;
                    >li{
                        box-shadow:0px 0px 20px #f5f605;
                        a{
                            display:block;
                            width:2.96rem;
                            height:2.8267rem;
                            box-sizing:border-box;
                            background:#fff;
                            border-radius:0.0533rem;
                            text-align:center;
                            padding-top:0.3467rem;
                            dl{
                                dt{
                                    color:#232323;
                                    font-size:0.3733rem;
                                    font-weight:bold;
                                    line-height:0.3733rem;
                                }
                                dd p{
                                    color:#666;
                                    font-size:0.2933rem;
                                    line-height:0.5333rem;
                                    span{
                                        color:#ff8243;
                                    }
                                }
                            }
                            img{
                                width:1.0933rem;
                                height:1.0933rem;
                            }
                        }
                    }
                }
            }
        }
        /* hots_show */
        .hots_show{
            height:7.7867rem;
            background:#fff;
            padding-left:0.4rem;
            .host_tit{
                height:1.5467rem;
                padding-right:0.4rem;
                display:flex;
                justify-content:space-between;
                align-items: center;
                h2{
                    font-size:0.48rem;
                    font-weight:bold;
                }
            }
            .swiper-slide{
                a{
                    display:block;
                    width:2.9067rem;
                    height:5.3867rem;
                    img{
                        display:block;
                        width:2.8533rem;
                        height:3.8933rem;
                        border:0.0267rem solid #ebebeb;
                    }
                    p{
                        height:1.12rem;
                        font-size:0.3733rem;
                        color:#232323;
                        line-height:0.56rem;
                        overflow:hidden; 
                        text-overflow:ellipsis;
                        display:-webkit-box; 
                        -webkit-box-orient:vertical;
                        -webkit-line-clamp:2; 
                    }
                }
            }
        }
        /* tour_show */
        .tour_show{
            height:7.7867rem;
            /* background:pink; */
            .tour_tit{
                padding-left:0.4rem;
                height:1.5467rem;
                padding-right:0.4rem;
                display:flex;
                justify-content:space-between;
                align-items: center;
                h2{
                    font-size:0.48rem;
                    font-weight:bold;
                }
            }
            .swiper-slide{
                a{
                    display:block;
                    width:6.5867rem;
                    height:5.68rem;
                    img{
                        display:block;
                        width:6.5333rem;
                        height:3.7333rem;
                        border:0.0267rem solid #ebebeb;
                    }
                    .tour_con{
                        text-align: center;
                        h3{
                            font-size:0.3733rem;
                            color:#232323;
                            line-height:0.3733rem;
                            font-weight:bold;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            margin:0.4rem 0 0.1867rem 0;
                        }
                        p{
                            font-size:0.32rem;
                            color:#666;
                            line-height:0.32rem;
                        }
                    }
                }
            }
        }
        /* vip_show */
        .vip_show{
            .vip_tit{
                .viptit_con{
                    height:1.0667rem;
                    padding: 0 0.4rem;
                    background:url(${require("@/images/vip_bg.cda230e.png")});
                    background-size: 100%;
                    display:flex;
                    justify-content: space-between;
                    .vipcon_l{
                        height: 1.0667rem;
                        display:flex;
                        align-items: center;
                        span:first-of-type{
                            display:block;
                            width: 0.5333rem;
                            height: 0.48rem;
                            background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg==);
                            background-size: cover;
                            background-position: 50%;
                            margin-right:0.1333rem;
                        }
                        span:last-of-type{
                            font-size: 0.3733rem;
                            color: #f0d1b0;
                            font-weight: bold;
                        }
                    }
                    .vipcon_r{
                        height: 1.0667rem;
                        span{
                            font-size:0.32rem;
                            color: #f0d1b0;
                            line-height:1.0667rem;
                        }
                    }
                }
            }
            .vip_subtit{
                height: 6.2533rem;
                display:flex;
                align-items: center;
                padding-left:0.4rem;
                .line_bar{
                    width: 0.0267rem;
                    height: 3.8933rem;
                    background: #ebebeb;
                    margin: 0 0.3067rem;
                }
                dl{
                    dt{
                        height: 1.1067rem;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        h4{
                            font-size:0.3733rem;
                            color: #232323;
                            font-weight:bold;
                        }
                        span{
                            display:block;
                            width: 0.1867rem;
                            height: 100%;
                            background:url(${require("@/images/vip_more.8fa27f2.png")})no-repeat center;
                            background-size:  0.1867rem 0.32rem;          
                        }
                    }
                    dd{
                        display: flex;
                        justify-content: space-between;
                        .vip_cell{
                            img{
                                width: 2.8533rem;
                                height: 3.9467rem;
                            }
                            p{
                                height: 1.0933rem;
                                padding-left: 0.2933rem;
                                padding-top: 0.24rem;
                                font-size:0.2667rem;
                                color:#999;
                                .vip_c1{
                                    font-size: 0.4rem;
                                    color: #ff6743;
                                }
                            }
                            .free_watch{
                                font-size: 0.4rem;
                                color: #ff6743;
                                .vip_c2{
                                    font-size:0.2667rem;
                                    color:#999;
                                    margin-left:0.04rem;
                                    text-decoration: line-through;
                                }
                            }
                        }
                    }
                    .vip_a1{
                        width: 5.92rem;
                    }
                }
            }
        }
        /* floorShow */
        .floor_show{
            .floor_subShow{
                .floor_tit{
                    height: 1.44rem;
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    padding: 0.3733rem 0.4rem 0;
                    background: #fff;
                    h2{
                        font-size:0.48rem;
                        color:#232323;
                        font-weight:bold;
                    }
                    a{
                        color:#232323
                    }
                }
                .floor_cell1{
                    a{
                        display:block;
                        height: 4.4267rem;
                        padding-left:0.4rem;
                        display:flex;
                        align-items: center;
                        background: #b68d96;
                        color: #fff;
                        img{
                            display:block;
                            width: 2.72rem;
                            /* height: 3.68rem; */
                            border-radius: 0.0667rem;
                            margin-right: 0.4rem;
                        }
                        .cell1_con{
                            height: 3.4933rem;
                            padding-right: 0.8rem;
                            padding-top: 0.1rem;
                            .cell1_con_top{
                                font-size: 0.2933rem;
                                span{
                                    font-size: 0.4rem;
                                }
                            }
                            .cell1_con_tit{
                                font-size: 0.4267rem;
                                line-height: 0.5867rem;
                                font-weight:bold;
                                margin: 0.4rem 0 0.4267rem 0;
                            }
                            .cell1_con_bottom{
                                font-size: 0.32rem;
                            }
                        }
                    }
                }
                .swiper-container{
                    background:#fff;
                    .swiper-wrapper{
                        padding-left:0.4rem;
                        .swiper-slide{
                            a{
                                display:block;
                                width: 2.9067rem;
                                height:5.92rem;
                                padding-top:0.4rem;
                                img{
                                    display:block;
                                    width: 2.8533rem;
                                    height: 3.8933rem;
                                    border: 0.0267rem solid #ebebeb;
                                    border-radius: 0.08rem;
                                }
                                h3{
                                    font-size: 0.3733rem;
                                    color: #232323;
                                    font-weight: bold;
                                    line-height: 0.56rem;
                                    margin-top:0.2933rem;
                                    margin-bottom: 0.0667rem;
                                    overflow:hidden; 
                                    text-overflow:ellipsis;
                                    display:-webkit-box;
                                    -webkit-box-orient:vertical;
                                    -webkit-line-clamp:2;
                                }
                                p{
                                    font-size: 0.2933rem;
                                    color: #999;
                                    span{
                                        font-size:0.3733rem;
                                        color: #ff6743;
                                        margin-right: 0.0533rem;
                                    }
                                }
                            }
                        }
                    }
                } 
            }
        }
        /* hot_thratre */
        .hot_thratre{
            padding-left: 0.4rem;
            background: #fff;
            .hot_thratre_tit{
                height: 1.44rem;
                display:flex;
                justify-content: space-between;
                align-items:center;
                padding: 0.3733rem 0.4rem 0;
                background: #fff;
                h2{
                    font-size:0.48rem;
                    color:#232323;
                    font-weight:bold;
                }
            }
            .swiper-wrapper{
                background: #fff;
                .swiper-slide{
                    box-sizing: border-box;
                    height: 7.9rem;
                    border: 0.0267rem solid #ebebeb;
                    border-radius: 0.08rem;
                    padding: 0.5333rem 0.4533rem;
                    .toShowTheatre{
                        width: 6.0667rem;
                        height: 1.3867rem;
                        margin-bottom: 1.04rem;
                        display: flex;
                        justify-content: space-between;
                        .theatre_tit{
                            display: flex;
                            img{
                                width: 1.3333rem;
                                height: 1.3333rem;
                                border: 0.0267rem solid #ebebeb;
                                border-radius: 0.0267rem;
                                margin-right: 0.2667rem;
                            }
                            .theatre_con{
                                padding-top: 0.1733rem;
                                h3{
                                    font-size: 0.3733rem;
                                    font-weight: bold;
                                    color: #232323;
                                    line-height: 0.3733rem;
                                    margin-bottom: 0.3467rem;
                                }
                                p{
                                    font-size: 0.2933rem;
                                    color: #666;
                                    line-height: 0.2933rem;
                                }
                            }
                        }
                        .theatre_icon{
                            font-size: 0.3733rem;
                            color: #666;
                            line-height: 1.3867rem;
                        }
                    }
                    .show{
                        width: 6.0667rem;
                        border-top: 0.0267rem solid #ebebeb;
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        >li{
                            width: 2.9067rem;
                            position: relative;
                            padding-top: 0.4667rem;
                            .show_time{
                                width: 100%;
                                height: 1.04rem;
                                padding-bottom:0.36rem;
                                position: absolute;
                                top: -1.0667rem;
                                left: 0;
                                p{
                                    font-size: 0.32rem;
                                    text-align:center;
                                    color: #b3b3b3;
                                    line-height: 1.04rem;
                                }
                                span{
                                    display: block;
                                    width: 0.1867rem;
                                    height: 0.1867rem;
                                    border-radius: 50%;
                                    background: #ccc;
                                    position: absolute;
                                    left: 1.4267rem;
                                    top: 0.95rem;
                                }
                                
                            }
                            .to_detail{
                                width: 2.8533rem;
                                height: 3.8933rem;
                                border: 0.0267rem solid #ebebeb;
                                border-radius: 0.08rem;
                                img{
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
            }  
    }
    }
`

//城市
const CityList = styled.div`
    height: 100%;
    overflow:hidden;
    .city_head{
        width: 100%;
        height: 1.1467rem;
        background: #fff;
        border-bottom: 0.0267rem solid #ebebeb;
        text-align: center;
        line-height: 1.1467rem;
        position:fixed;
        top: 0;
        span{
            float: left;
            display: block;
            width: 1.04rem;
            height: 1.1467rem;
        }
        h3{
            float:left;
            width:7.92rem;
            height:1.1467rem;
            font-size: 0.48rem;
            margin:0;
        }
    }
    .city_main{
        height: 100%;
        overflow: hidden;
        .city_left{
            height:100%;
            padding-top: 1.7333rem;
            overflow: auto;
            .current_city{
                padding-left: 0.4rem;
                height:1.6rem;
                span{
                    display:block;
                    height:0.2933rem;
                    font-size:0.2933rem;
                    line-height:0.2933rem;
                    color:#999;
                    margin-bottom: 0.2933rem;
                }
                .city_cell1{
                    display:flex;
                    justify-content: space-between;
                    flex-wrap:flex-wrap;
                    li{
                        width:2.6667rem;
                        height:0.9333rem;
                        border: 0.0267rem solid #fefefe;
                        border-radius: 0.0667rem;
                        font-size: 0.32rem;
                        color:#232323;
                        text-align:center;
                        line-height:0.9333rem;
                        background:#fff;
                    }
                }
            }
            .city_cell2{
                >li{
                    .city_code{
                        display: block;
                        padding-left: 0.4rem;
                        height:0.7733rem;
                        line-height: 0.7733rem;
                        color:#999;
                    }
                    .city_cell3{
                        padding-left: 0.4rem;
                        padding-right:1.04rem;
                        background:#fff;
                        >li{
                            height:1.3333rem;
                            border-bottom: 0.0267rem solid #ebebeb;
                            line-height:1.3333rem;
                        }
                        >li:last-of-type{
                            border-bottom:none;
                        }
                    }
                }
            }
        }
        .city_right{
            width:1.04rem;
            position:fixed;
            right:0;
            top:3.7333rem;
            ul li{
                width:1.04rem;
                height:0.55rem;
                line-height:0.55rem;
                text-align:center;
                font-size:0.35rem;
                color:#666;
            }
        }
    }
   
`

const Search = styled.div`
    height:100%;
    background: #fff;
    padding: 0 0.4rem;
    overflow:auto;
    .search_box{
        height: 1.1733rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.7733rem;
        form{
            position: relative;
            em{
                display: block;
                width: 0.4rem;
                height: 0.4rem;
                background: url(${require("@/images/search_icon.c387af4.png")}) no-repeat;
                background-size: 100%;
                position: absolute;
                left: 0.4rem;
                top: 0.2267rem;
                z-index: 10;
            }
            .clear{
                display: block;
                width: 0.4rem;
                height: 0.4rem;
                background: url(${require("@/images/cancel.4cc4580.png")}) no-repeat;
                background-size: 100%;
                position: absolute;
                right: 0.2933rem;
                top: 0.2rem;
                z-index: 10;
            }
            .search_txt{
                box-sizing: border-box;
                width: 8.0533rem;
                height: 0.8rem;
                border: 0.0267rem solid #ebebeb;
                background: #f5f5f5;
                padding-left: 0.9067rem;
                padding-right: 0.9067rem;
                line-height: 0.7467rem;
                font-size: 0.3467rem;
                color: #848484;
                border-radius: 0.36rem;
            }
        }
        .go_back{
            font-size: 0.3467rem;
            color: #666;
        }
    }
    .hot_search{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        h2{
            font-size:0.3467rem;
            color: #666;
            line-height: 0.3467rem;
            margin-bottom: 0.64rem;
        }
        .hot_search_list{
            width: 100%;
            background:white;
            margin-top:0.5rem;
            display:block;
            >li{
                float:left;
                height: 0.9333rem;
                padding: 0 0.6667rem;
                border-radius: 0.0533rem;
                background: #f5f5f5;
                font-size: 0.3467rem;
                color: #232323;
                line-height: 0.9333rem;
                margin-bottom: 0.3467rem;
                margin-right: 0.3467rem;
            }
            
        }
        .search_list{
                width:100%;
                >li{
                    height:4.5rem;
                    margin-bottom:0.3rem;
                    background:white;
                    .search_list_pic{
                        width:40%;
                        float: left;
                        img{
                           width:100%;
                            height:4.5rem;
                        }
                    }
                    .search_list_msg{
                        float:right;
                        width:55%;
                        height:4.2rem;
                        display:flex;
                        flex-direction:column;
                        justify-content:space-around;
                        font-size:0.2rem;
                    }

                }
            }
    }
   
`
// 为你推荐
const ShowList = styled.div`
padding:0.4rem;
background-color:#fff;
h2{
    font-weight:600;
}
.search_list{
    width:100%;
    >.main{
        height:4.5rem;
        margin-bottom:0.3rem;
        background:white;
        .search_list_pic{
            width:40%;
            float: left;
            margin-top:0.4rem;
            margin-left:0.45rem;
            img{
                float:left;
                width: 2.72rem;
                height: 3.68rem;
                border-radius: 0.0667rem;
                margin-right: 0.4rem;
            }
        }
        .search_list_msg{
            float:right;
            width:55%;
            height:4.2rem;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            font-size:0.2rem;
        }

    }
}


`

export {IndexHome,CityList,Search,ShowList}