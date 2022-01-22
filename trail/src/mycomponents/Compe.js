import React, { Component } from "react";
import { Abcconsumer} from "./Akhcontext";
class Compe extends Component{
render(){
    return(
        <Abcconsumer>
        {
            (va) => {
                return <div> hello {va} </div>
                }
        }
        </Abcconsumer>
    );

}
}
export default Compe;