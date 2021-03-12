import React from 'react'
class Toggle extends React.Component{
    constructor(){
       super();
       this.state={
           show:true
       }
    }
    render(){
        return (
            <div>{
             this.state.show ? <h1>hide and show</h1>:null  
            }
            <button onClick = {()=>{this.setState({show:!this.state.show})}}>Toggle Me</button>  
                </div>
        )
    
}
}
export default Toggle;