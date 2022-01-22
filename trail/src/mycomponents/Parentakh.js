import React, { Component } from 'react';
import Childakh from './Childakh'
class Parentakh extends Component {
    constructor(){
        super()
        this.state={pname:"abcd"}
    }
getfullnameofparent = (p)=>{
    alert(` the full name is : ${this.state.pname} ${p}`)
}

    render() {
        return (
            <div>
                <Childakh akhilparam={this.getfullnameofparent}/>
            </div>
        );
    }
}

export default Parentakh;