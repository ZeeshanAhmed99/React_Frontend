import React from 'react'
function Profile(Props)
{
    const func=()=>{
        alert("Function is called");
    }
    return (
        <div> <h1 onClick = {func}>{Props.xyz} {Props.text.name} </h1></div> 
        );
}
export default Profile;