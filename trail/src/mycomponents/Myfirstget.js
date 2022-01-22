import React, { Component } from "react";
import axios from "axios";

class Myfirstclass extends Component{
constructor(){
    super()
    this.state={
        akhposts:[],
        myerr:''
    }
}
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp)=> {
        console.log(resp.data)
        this.setState({akhposts:resp.data})
        }
        )
        .catch((err)=>{
        console.log("akhi the error is" +err)
        this.setState({myerr:"akhi the error is"+err})
        }
        )
    }

    render(){
        const {akhposts,myerr}=this.state;
        //const p =akhposts.map((post)=><h1 key={post.id}>{post.title}</h1>)
        return(
            <div>
            {
                akhposts.length ?
                akhposts.map((post)=><h1 key={post.id}>{post.title}</h1>) : myerr
                }
            </div>
        );
    }
}

export default Myfirstclass;