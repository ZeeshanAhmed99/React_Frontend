import React from 'react' 
class Listing extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[
                {name:'Zeeshan',phone:'111',email:'zeeshan123@gmail.com'},
                {name:'Ramsha', phone:'789',email:'Ramsha13@gmail.com'},
                {name:'Alina',Phone: '745',email:'Alina12@gmail.com'}

            ]
        }
    }
    render(){
        return(
            <div>
            <h1>Listing with Map</h1>
            {
                this.state.list.map((item)=>
                <span> {item.name}</span>
                )
            }
            </div>
        )
    }
}
export default Listing;