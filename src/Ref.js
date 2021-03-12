import React from 'react'  
class Ref extends React.Component{
    constructor(){
        super()
        this.userRef = React.createRef();
    }
    editVal(){
       // console.warn(this.userRef)
      this.userRef.current.value = "10000"
    }
    render(){
        return(
            <div>
                <h1>What is Ref in React</h1>
                <input ref = {this.userRef} type = "text" name = "User" />
                <button onClick = {()=>this.editVal()}> Click Me</button>
                <br/><br/><br/>
            </div> 
        )
    }
}
export default Ref;