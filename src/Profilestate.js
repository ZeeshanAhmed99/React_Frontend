import React from 'react'

class Profilestate extends React.Component
{
    constructor()
    {
        super();
        this.state =  {
            name:'peter',
            email:'peter@gmail.com'
        }
    }
    updateState(){
        this.setState({
            name:'Bruce'
        })
    }
    resetState(){
        this.setState({
            name:'Peter'
        })
    }

    render(){
        return (
            <div> 
            <h1>Hello {this.state.name}</h1>
            <h1>Email: {this.state.email} </h1>
            <div onMouseOver = {()=>{this.updateState()}} onClick ={()=>{this.resetState()}} >Update Name</div>
            </div>
        )
    }
}
export default Profilestate;
