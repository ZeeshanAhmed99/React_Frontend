import React,{useState} from 'react'
function UseState(){
    const[count,setcount] = useState(0,1)
    return (
        <div> <br/> HOOKS in Functional Component {count+1} <br/> 
        <button onClick = {()=>{setcount(count + 1)}}>Increment</button>
        </div>
    )
}
export default UseState;