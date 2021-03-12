import React,{useEffect,useState} from 'react';

const Hooks = () => {
const [count,setcount] = useState(1)
useEffect(() =>{
    console.warn(count)
},[count==6])
return (
    <div>
        <h1> Use Effect Hooks in React Js  {count} </h1>
        <button onClick = {()=> setcount(count + 1)}>Update State</button>
    </div>
);

};
export default Hooks;