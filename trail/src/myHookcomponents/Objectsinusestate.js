import React, { useState } from "react"

function Easports(){
    const[name,setName]=useState({firstName:'',lastName:'',middleName:''})
return(
    <div>
    <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/><br/>
    <input type="text" value={name.middleName} onChange={e=>setName({...name,middleName:e.target.value})}/><br/>
    <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/><br/><br/><br/>
    <h1>The firstname is {name.firstName}</h1>
    <h1>The middlename is {name.middleName}</h1>
    <h1>The lastname is {name.lastName}</h1>
    </div>
);
}
export default Easports