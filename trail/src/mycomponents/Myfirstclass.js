import React,{ Component } from "react";
class Myfirstclass extends Component{

constructor(){
    super();
    this.state={
        name:"charu"
    }
}
render(){
    // const {name,lastname,firstname}= this.props
    return (
    <div>
    <p>om sairam</p>
    <h1>{this.state.name}</h1>
    <h3>full name {this.props.name} {this.props.lastname+"    "+this.props.firstname}</h3>
    {/* <h3>full name {name} {lastname+"    "+firstname}</h3> */}
    <h1>{this.props.children}</h1>
    <button onClick={()=>{this.setState({name:"shekar"})}}>click me</button>
    </div>
    );
}

}

export default Myfirstclass;