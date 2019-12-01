import React,{Fragment} from 'react';
import { Route,Redirect,Switch } from "react-router-dom";

import Index from "@/components/main/index"
import List from "@/components/main/list/index"
import Detail from "@/components/main/detail/index"
import Mine from "@/components/main/mine/mine"
import City from "@/components/main/index/section/city"
import SearchBar from "@/components/main/index/section/search"
import Tick from "@/components/main/tick/index"



export default class extends React.Component{
        render(){
            return (
                <Fragment>
                    {/* <Switch>
                        <Route path="/index" exact component={Index}/>
                        <Route path="/index/city" component={City}/>
                        <Route path="/index/search" component={SearchBar}/>
                    </Switch> */}
                    <Route path="/index"  component={Index}/>
                    <Route path="/city" component={City}/>
                    <Route path="/search" component={SearchBar}/>
                    <Route path="/list" component={List}/>
                    <Route path="/tick" component={Tick}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/mine" component={Mine}/>
                    <Redirect path="/" to="/index"/>
                </Fragment>
            )
        }
}

