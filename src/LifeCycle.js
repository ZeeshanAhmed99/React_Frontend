import React from 'react'

class LifeCycle extends React.Component{
    constructor(){
        super();
        this.state = {
           active:null
        }
        console.warn("Constructor")
    }
    componentDidMount(){
        console.warn("component did mount")
    }
    componentDidUpdate(){
      console.warn("UPdated")
    }
    componentWillUnmount(){
       alert("Deleted") 
    }
    render(){
        console.warn("render")
        return(
            <div> <h1>Hi LifeCycle Method</h1> 
            <button onClick = {()=>{this.setState({active:"yes"})}}>Active</button>
            </div>
        )
    }
}
export default LifeCycle;