import React, { useState } from 'react'
function Myfirsthook(){
    const [count,setCount]=useState(0)
return(
    <div>
        <button onClick={()=>setCount(count+1)}> Click Count  {count} </button>
    </div>
);
}

export default Myfirsthook;