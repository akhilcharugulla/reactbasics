import React from "react";
function charu(props){   //{name,firstname,lastname}  we can pass it as property aslo
    const {name,firstname,lastname}=props
    return (
<div>
    <h2>Hi {props.name} fullname: {props.firstname +"   "+props.lastname}</h2>

    <h1>Hi {name} fullname: {firstname +"   "+lastname}</h1>
    {props.children}
</div>
    )
}

export default charu;