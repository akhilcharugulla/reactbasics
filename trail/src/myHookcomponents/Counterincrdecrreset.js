import React, { useState } from 'react'
function Incrdecr(){
    const initialCount=0
    const [count,changecount]=useState(initialCount)

    const incrementFive=()=>{
        for(var i=0;i<5;i++){
        changecount((prevcount)=>prevcount+1)
        }
    }   
    return(
        <div>
        {count}<br/><br/>
        <button onClick={()=>changecount(count+1)}>Increment</button><br/><br/>
        <button onClick={()=>changecount(count-1)}>Decrement</button><br/><br/>
        <button onClick={()=>changecount(initialCount)}>Reset</button><br/><br/>
        <button onClick={incrementFive}>Incrementby5</button>

        </div>
    );
}
export default Incrdecr