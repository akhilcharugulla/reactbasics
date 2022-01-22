import React, { Component } from "react";
import Compe from "./Compe";
import abc from './Akhcontext'
class Compd extends Component{
render(){
    return(
        <div>
        <h3>yepp....... {this.context}</h3>
        <Compe/>
        </div>
    );
}
}

Compd.contextType=abc;
export default Compd;