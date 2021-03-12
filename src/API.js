import React from 'react'
class API extends React.Component{
    constructor(){
        super();
        this.state = {
            users:null
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2').then((resp)=>{
            resp.json().then((results)=>{
                console.warn(results.data)
                this.setState({users:results.data})
            })
        })
    }
    render(){
        return (
            <div>
                <h1> Fetch API</h1>{
                this.state.users? this.state.users.map((item,i)=>
                <div> <p>{i} -- {item.first_name} -- {item.last_name}</p>
                </div>    
           ) : null
            }
            </div>

                ); 
            }
}
export default API