import React from "react";
import { useParams } from "react-router-dom";
import { BaseApp } from "./base";

export function View({user}){
    const {id} =useParams();
    const person = user[id];
    return(
        <BaseApp>
<div>
 <div className="details">
 <div  className="card">
    <h2>{person.name}</h2>
    <p>class:{person.std}</p>
    <p>section:{person.section}</p>
    <p>id:{person.id}</p>
   
</div>


        </div>
</div>
</BaseApp>
    );
}