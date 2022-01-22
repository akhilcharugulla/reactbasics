import React,{Component} from "react";
class Myfirstcounter extends Component{
constructor(){
    super()
    this.state={count:0}
}

increment(){
    this.setState({count:this.state.count+1},()=>{console.log(this.state.count)});

    //this.setState((prev,props)=>({count:prev.count+1}),()=>{console.log(this.state.count)});
}

incrementfive(){
    console.log("akhil")
    this.increment();
    this.increment();
    this.increment();
}
render(){
    return(
        <div>
        <h1>The count is {this.state.count}</h1>
        <button onClick={()=>this.increment()}>click me to increment</button>
        </div>
    );
}
}

export default Myfirstcounter