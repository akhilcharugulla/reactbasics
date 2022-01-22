import axios from "axios";
import React,{Component} from "react";
class Myfirstpost extends Component{
constructor(){
    super();
    this.state={
        id:'',
        title:'',
        body:''
    }
}

submypost =(event)=>{
    event.preventDefault()
axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
.then(resp=>{console.log(resp)})
.catch(err=>{console.log(err)})
}

chnageak =(eve)=>{
    this.setState({[eve.target.name]:eve.target.value})
}
render(){
    const{id,title,body}=this.state
    return(
        <form onSubmit={this.submypost}>
        <label>id</label>
        <input type="text" name="id" value={id} onChange={this.chnageak}/><br/>
        <label>title</label>
        <input type="text" name="title" value={title} onChange={this.chnageak}/><br/>
        <label>body</label>
        <input type="text" name="body" value={body} onChange={this.chnageak}/><br/>
        <br/>
        <button type="submit">Sub</button>
        </form>
    );
}
}
export default Myfirstpost