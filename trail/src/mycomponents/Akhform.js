import React ,{Component} from "react";
class Akhform extends Component{
constructor(){
    super();
    this.state={
        firstName:"",
        comment:"",
        topic:""
    }
}
setName = (e)=>{
    this.setState({firstName:e.target.value})
    console.log(e.target.value);
}
setComment = (eve)=>{
this.setState({comment:eve.target.value})
}
setTopic = (blackie)=>{
this.setState({topic:blackie.target.value})
 console.log(blackie.target.value)
}
submitform = (event)=>{
    alert(`${this.state.firstName}      ${this.state.comment}       ${this.state.topic}`)
event.preventDefault();
}
    render(){
        return(
            <form onSubmit={this.submitform}>
            <label>First Name</label>
            <input type="text" value={this.state.firstName} onChange={this.setName} />
            <br></br>
            <label>Comment</label>
            <textarea value={this.state.comment} onChange={this.setComment}></textarea>
            <br></br>
            <label>Lanaguage</label>
            <select value={this.state.topic} onChange={this.setTopic}>
                <option value="react.js">React</option>  
                <option value="angular.js">Angular</option>  
                <option value="vue.js">Vue</option>  
            </select>
            <br/>
            <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Akhform;