import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BaseApp } from "./base";

export function Adduser({user,setUser}){
const history = useHistory();

    const[name,setName]=useState('');
    const[std,setStd]=useState('');
    const[section,setSection]=useState('');
    const[id,setId]=useState('');

   const addnewuser = ()=>{
    const newuser = {
        name,
        std,
        id,
        section
    }
    console.log(newuser);
    setUser([...user,newuser]);
    setName('');
    setSection('');
    setId('');
    setStd('');

    history.push('/students')
   }
   

    return(
      <BaseApp>
        <div className="adduser">
            <input placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}></input>{' '}

            <input placeholder="class"
            value={std}
            onChange={(e)=>setStd(e.target.value)}></input>{' '}

            <input placeholder="id"
            value={id}
            onChange={(e)=>setId(e.target.value)}></input>{' '}

            <input placeholder="section"
            value={section}
            onChange={(e)=>setSection(e.target.value)}></input>{'  '}
           <button onClick={addnewuser} >Add</button>
        </div>
       
        </BaseApp>
    )
}