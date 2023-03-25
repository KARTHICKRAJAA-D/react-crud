import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Adduser } from "./adduser";
import { BaseApp } from "./base";
import { data } from "./data";

export function Students({user,setUser}){
   
    
const history = useHistory();
const Deleteuser =(idx)=>{
    const altered =
        user.filter((per,id)=>per.id !== idx)
       setUser(altered);
}
   
return(
        <BaseApp>
          
        <div className="details">
{user.map((per,ind)=>(<div key={ind} className="card">
    <h2>{per.name}</h2>
    <p>class:{per.std}</p>
    <p>section:{per.section}</p>
    <p>id:{per.id}</p>
    <button onClick={()=>history.push(`/edit/${per.id}`)}>Edit</button>{' '}
    <button onClick={()=>Deleteuser(per.id)}>Delete</button>{' '}
    <button onClick={()=>history.push(`/view/${ind}`)}>View</button>
</div>)

)}
        </div>
        </BaseApp>
    )
}