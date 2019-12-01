import styled from 'styled-components'

export const DetailStyle = styled.div`
    width:100%;
    height:100%;
    overflow:auto;
    /* head */
    #detail{
        width:100%;
        height:100%;
        overflow:auto;
        .detail_head{
            width:100%;
            height:5.9rem;
            .shade{
                width:100%;
                height:5.9rem;
                background:rgba(000,000,000,0.8);
                .detail_head_top{
                    padding-top:0.2rem;
                    display:flex;
                    font-size:0.5rem;
                    color:white;
                    span{
                        flex:1;
                        margin-left:30%;
                    }
                    i{
                        margin-left:0.3rem;
                        margin-right:0.2rem;
                    }
                }
                .detail_head_bottom{
                    width:9.33rem;
                    .left_pic{
                        float: left;
                        margin-left:0.4rem;
                        margin-top:0.8rem;
                        img{
                            width:2.8rem;
                            height:3.4rem;
                        }
                    }
                    .right_text{
                        width:5.5rem;
                        float: left;
                        margin-top:0.8rem;
                        margin-left:0.6rem;
                        font-size:0.45rem;
                        color:white;
                        .right_price{
                            margin-top:0.8rem;
                            font-size:0.5rem;
                        }
                    }
                }
            }
        }
        .show_msg{
            width:100%;
            height:3.5rem;
            background:white;
            .show_msg_time{
                margin-left:0.3rem;
                padding-top:0.3rem;
                font-size:0.25rem;
                b{
                    font-weight:bold;
                    font-size:0.35rem;
                    margin-right:0.4rem;
                }
            }
            .show_msg_site{
                margin-left:0.3rem;
                font-weight:bold;
                font-size:0.25rem;
                margin-top:0.4rem;
                span{
                    font-size:0.4rem;
                    margin-right:0.2rem;
                }
            }
            .show_msg_address{
                margin-left:0.3rem;
                font-size:0.25rem;
                margin-top:0.25rem;
            }
            .Vip{
                width:92%;
                background:linear-gradient(-50deg,#ff9a34,#ff4d4a);
                height:1rem;
                display:flex;
                justify-content:space-around;
                align-items:center;
                margin:auto;
                border-radius:10px;
                margin-top:0.2rem;
                color:white;
                i{
                    img{
                        width:0.6rem;
                        height:0.5rem;
                    }
                }
            }
        }
        .attention{
            width:100%;
            background:white;
            margin-top:0.5rem; 
            height:5rem;
            ul{
                width:94%;
                margin:auto;	
                li{
                    width:100%;
                    height:1.2rem;
                    border-top:1px solid #f0f0f0;
                    line-height:1.2rem;
                    font-size:0.3rem;
                    color:#555453;
                    i{
                        width:1.8rem;
                        float:left;
                        color:#6c6c6c;
                        font-size:0.3rem;
                    }
                    span{
                        float:left;
                        margin-right:0.5rem;
                        font-weight:bold;
                        font-size:0.3rem;
                    }
                    b{
                        float:right;
                        line-height:1.2rem;
                        margin-right:0.2rem;
                    }

                }

            }
        }
        .show_desc{
            width:100%;
            background:white;
            .show_desc_shade{
                width:94%;
                font-size:0.4rem;
                margin:auto;
                line-height:0.5rem;
                .show_desc_title{
                    font-size:0.4rem;
                    font-weight:bold;
                }
                img{
                    width:100%;
                    height:10.5rem;
                }
           
            }
            
        }
        .shop{
            width:100%;
            height:1.5rem;
            border:1px solid #f0f0f0;
            position:fixed;
            bottom:0;
            display:flex;
            justify-content:space-around;
            align-items:center;
            text-align:center;
            font-size:0.4rem;
            z-index:100000000;
            background:white;
            .shopping{
                width:80%;
                background:linear-gradient(-50deg,#ff9a34,#ff4d4a);
                color:white;
                height:1rem;
                line-height:1rem;
                border-radius:5px 5px ;                        
            }
        }
    }
`




export const Detailtime = styled.div`
     /* detail_time组件 */
     #detail_time{
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:100000000;
        display:none;
        .title{
            font-size:0.45rem;
            margin-left:0.2rem
        }
        .detail_time_shade{
            width:100%;
            height:100%;
            background:rgba(000,000,000,0.6);
        }
        .detail_time{
            font-weight:bold;
            position:absolute;
            bottom:0;
            width:100%;
            height:60%;
            background:white;
            border-radius:20px 20px 0 0;
            .noShow{
                position:absolute;
                right:0.4rem;
                top:0.4rem;
                font-size:0.4rem;
            }
            .select_time{
                position:absolute;
                top:0.6rem;
                width:100%;
                font-size:0.3rem;                   
                p{
                    width:3.2rem;
                    height:1rem;
                    line-height:1rem;
                    text-align:center;
                    background:#feaf81;
                    float: left;
                    margin-left:0.4rem;
                    margin-top:0.3rem;
                }
            }
            .select_site{
                position:absolute;
                top:1rem;
                width:100%;
                font-size:0.3rem;
                margin-top:2.5rem;
                p{
                    width:2.4rem;
                    height:0.8rem;
                    line-height:0.8rem;
                    text-align:center;
                    background:#feaf81;
                    float: left;
                    margin-left:0.4rem;
                    margin-top:0.3rem;
                    margin-right:0.2rem
                }
            }
            .select_price{
                position:absolute;
                top:1rem;
                width:100%;
                font-size:0.3rem;
                margin-top:5rem;
                ul{
                    li{
                        width:1.6rem;
                        height:0.6rem;
                        line-height:0.6rem;
                        text-align:center;
                        background:#f0f0f0;
                        float: left;
                        margin-left:0.2rem;
                        margin-top:0.3rem;
                        margin-right:0.2rem
                    }
                }
            }
            
            .shop{
                width:100%;
                height:1.5rem;
                border:1px solid #f0f0f0;
                position:fixed;
                bottom:0;
                display:flex;
                justify-content:space-around;
                align-items:center;
                text-align:center;
                font-size:0.4rem;
                z-index:100000000;
                background:white;
                .shopping{
                    width:80%;
                    background:linear-gradient(-50deg,#ff9a34,#ff4d4a);
                    color:white;
                    height:1rem;
                    line-height:1rem;
                    border-radius:5px 5px ;                        
                }
            }
        }
        
    }
`

export const DetailshowId = styled.div`
    /* DetailshowId组件 */
    #Detail_showId{
        margin-top:0.5rem;
        height:2.8rem;
        background:white;
        margin-bottom:0.5rem;
        overflow:auto;
        .Detail_showId_title{
            height:0.5rem;
            margin-left:0.3rem;
            font-size:0.4rem;
            line-height:0.5rem;
            font-weight:bold;
        }
        ul{
           width:96%;
           margin:auto;
            height:2rem;
            overflow:auto;
            display:flex;
            justify-content:space-between;
            align-items:center;
            li{
                width:2.2rem;
                height:1.8rem;
                border: 1px solid #6c6c6c;
                text-align:center;
                border-radius:5px;
                margin-right:0.4rem;
                h2{
                    font-size:0.5rem;
                    line-height:1rem;

                }   
                p{
                    width:2.2rem;
                    font-size:0.1rem;
                    color:red;
                    line-height:0.6rem;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    
                }
            }
        }
    }



`