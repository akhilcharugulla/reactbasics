import React,{useState} from "react";
function Firstarray(){
    const[myarr,addelement]=useState([])
    const addData=()=>{
        addelement([...myarr,{id:myarr.length,value:"toon"}])
    }
   const aa= myarr.map(item =>{return <li key={item.id}>{item.value}</li>})
return(
    <div>
    <ul>
    {aa}
    </ul>
    <button onClick={addData}>add element</button>
    </div>
);
}
export default Firstarray;