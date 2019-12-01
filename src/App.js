import React,{Fragment} from 'react';
import StyledGlobal from '@/global';
import Routers from "@/router"

import Footer from "@/components/layout/footer"

export default class extends React.Component{
    render(){
        return (
            <Fragment>
                <StyledGlobal/>
                <Routers/>
                <Footer/>
            </Fragment>
        )
    }
}
