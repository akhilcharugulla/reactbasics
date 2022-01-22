import React from "react";
function abceventhandling(){

    function getName(){
        console.log("The name is seshu in function")
    }
return(
    <div>
        <button onClick={getName}>click in function </button>
    </div>
);
}

export default abceventhandling;