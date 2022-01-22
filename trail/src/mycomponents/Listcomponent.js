import React from "react";
function compo(person){
    const {name,age,weight}= person;
// const persons =[{name:"akhil", age:"24",weight:"80"},{name:"likhitha", age:"5",weight:"60"},{name:"seshu", age:"75",weight:"62"}]
// const pi = persons.map(person => <h1>I am {person.name} my age is {person.age} my weight is {person.weight}</h1>)
return (
<div>
<h1>I am List Component</h1>
<h1>I am {name} my age is {age} my weight is {weight}</h1>
</div>
);
}

export default compo;