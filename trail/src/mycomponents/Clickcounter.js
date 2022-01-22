import React,{Component} from 'react'
import Hochoverandclick from './Hochoverandclick'
class Clickcounter extends Component{
    // constructor(){
    //     super()
    //     this.state={count:0}
    // }

    // // incrementCountValue=()=>{
    // //     this.setState({count:this.state.count+1})
    // // }

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
        <button onClick={incrementCountValue}> {name} clicked {count} times</button>
        </div>
    );
}
}

export default Hochoverandclick(Clickcounter,5);