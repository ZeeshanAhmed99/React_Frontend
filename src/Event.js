import React from 'react'
import LifeCycle from './LifeCycle'
class Event extends React.Component{
    constructor(){
        super()
        this.state={
            active:false
        }
    }
    func(){
      alert("Event Handler is here")
    }
    render(){
        return(
            <div>
            <h1>Event Handler in React </h1>
             {
                 this.state.active? <LifeCycle /> : null             }
            <button onClick={()=>{this.func()}}>Click Me</button>
            </div>
        )
    }
}

export default Event;