import React from "react";

function myfunc(props){
    console.log(props.akhilparam)

return (
    <div>
        {/* <button onClick={props.akhilparam}>click me</button> */}
        <button onClick={()=> props.akhilparam("child ak")}>click me</button>
    </div>
);
}

export default myfunc;