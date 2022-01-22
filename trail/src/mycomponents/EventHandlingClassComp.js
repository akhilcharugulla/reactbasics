import React,{Component} from "react";
class EventHandlingFunctionalComp extends Component{
    constructor(){
        super();
        this.state={name:"seshu "}
    }

    getName(){
        console.log("seshu in class");
        this.setState({name:"seshu the buss"})
    }

     oops =()=>{
        console.log("I am arrow function");
        this.setState({name:"Arrow"})
    }
    render(){
        
        return(
            <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.oops}>Arrow click in class </button> <br/>
            <button onClick={()=>this.getName()}>click in class</button>
            </div>
        );
    }
}

export default EventHandlingFunctionalComp;