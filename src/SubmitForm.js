import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './Form.css'
import Home from './Home'
import LifeCycle from './LifeCycle'
import Listing from './Listing'
class SubmitForm extends React.Component{
    constructor(){
        super()
        this.state = {
            user: null,
            password: null,
            userError:""
        }
    }
    valid(){
        if(this.state.user.includes("@")){
            this.setState({userError:"Invalid Name"})
        }
    }
    submit(){
        if(!this.valid())
        console.log(this.state)
    }
    render(){
        return (
        <div className = "Header">
            <Router>
                <Link to = "/Home">Home </Link>
                <Link to = "/Listing">Listing </Link>
                <Link to = "LifeCycle">LifeCycle </Link>
                <Route path = "/Home" component = {Home} ></Route>
                <Route path = "/Listing" component = {Listing} ></Route>
                <Route path = "/LifeCycle" component = {LifeCycle} ></Route>
            </Router>
             <h1> Form Handling</h1>
             <input type = "text" name = "user" onChange = {(e)=>{this.setState({user: e.target.value})}} />
             <br/>
             <p style = {{color: "red",fontSize: "12px"}}>{this.state.userError}</p>
            <input type = "password" name = "Pass" onChange = {(e)=>{this.setState({password: e.target.value})}} />
            <br/> <br/>
            <button style = {{color:"Green"}} onClick = {()=>this.submit()}>Submit form</button>
        </div>
        );
    }
}
export default SubmitForm;