import React from 'react'
class Api_calling extends React.Component{
       
    constructor(){
        super();
        this.state = {
            isLoading: true,
            email:[],
        }
    }
    componentDidMount(){
        return fetch('http://127.0.0.1:8000/firstapp/getEmail')
        .then((response) => response.json())
        .then((responseJson) => {
         
            this.setState({
                isLoading: false,
                email: responseJson
            });
             console.warn("data from api",responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render(){
        return (
            <div>
            <h1> Fetch API</h1>{
             <div>{this.state.email.map(email => <div key={email.id}>{email.id}--{email.Email}</div>)} </div>
        }
        </div>

            ); 
        }
}
export default Api_calling