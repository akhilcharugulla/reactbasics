import React,{Component} from "react";


const Hochoverandclick =(OldComponenet,akhilsincrement)=>{
class NewComponent extends Component{
    constructor(){
        super()
        this.state={count:0}
    }
    incrementCountValue=()=>{
        this.setState((pre)=>{
            return {count:pre.count+akhilsincrement}
        }
        )
    }

    render(){
        return(
            <OldComponenet  name="akhil" count={this.state.count} incrementCountValue={this.incrementCountValue} {...this.props}/>
        );
    }
}
return NewComponent;
} 

export default Hochoverandclick;