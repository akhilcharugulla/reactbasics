import React,{ Component } from "react";
class Secondclass extends Component{
    constructor(){
        super();
        this.state={firstname:"akhil"}
    }

render(){
    return(
        <div>
        <h1>hii {this.state.firstname}</h1>
        <button onClick={()=>{this.setState({firstname:"likhitha"})}}>change name</button>
        </div>
    );
}
}

export default Secondclass;