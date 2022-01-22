import React,{Component} from 'react'
import Hochoverandclick from './Hochoverandclick'

class Hovercounter extends Component{
    // constructor(){
    //     super()
    //     this.state={count:0}
    // }
    // incrementCountValue=()=>{
    //     this.setState((pre)=>{
    //         return {count:pre.count+1}
    //     }
    //     )
    // }
render(){
    //const {count} = this.state
    const {name,count,incrementCountValue} = this.props
    
    return(
        <div>
        <h2 onMouseOver={incrementCountValue}> {name} clicked {count} times</h2>
        <h1>my surname is {this.props.surname}</h1>
        </div>
    );
}
}

export default Hochoverandclick(Hovercounter,10);