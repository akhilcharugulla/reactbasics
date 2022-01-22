import React,{Component} from "react";
class CreatingRefs extends Component{
    constructor(){
        super()
        this.myref= React.createRef();
    }
    componentDidMount(){
        this.myref.current.focus()
    }
    akh=()=>{
        alert(this.myref.current.value)
    }
render(){
    return (
        <div>
            <input type="text" ref={this.myref}/>
            <button onClick={this.akh}>click</button>
        </div>
    );
}
}
export default CreatingRefs;