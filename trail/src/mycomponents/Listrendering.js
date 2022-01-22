import React from "react";
import Listcomponent from './Listcomponent';
function aklist(){
// var names = ["aaa","bbb","ccc","ddd"]
// var qwerty = names.map((name)=> <h1>{name}</h1>)

const persons =[{name:'akhil', age:'24',weight:'80'},{name:'likhitha', age:'5',weight:'60'},{name:'seshu', age:'75',weight:'62'}]
//const pi= persons.map(person => <h1>I am {person.name} my age is {person.age} my weight is {person.weight}</h1>)

const pi = persons.map(person => <Listcomponent key={person.name} aklistpersonprop={person}/>)

    return (
    <div>
    {/* {qwerty} */}
    {pi}
    </div>
    );
}
export default aklist;