import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BaseApp } from "./base";

export function Edit({user,setUser}){
const history = useHistory();

    const[name,setName]=useState('');
    const[std,setStd]=useState('');
    const[section,setSection]=useState('');
    const[idx,setIdx]=useState('');

    const {id}=useParams();

    const selecteduser=user.find((per)=>per.id === id);
   


    useEffect(()=>{
        setIdx(selecteduser.id);
        setName(selecteduser.name);
        setSection(selecteduser.section);
        setStd(selecteduser.std)
    },[])

const updateuser = ()=>{
    const editindex=user.findIndex(per=>per.id===id);
    const edited={
        id: idx,
        name,
        section,
        std
       
    }
   
   user[editindex]=edited;
   setUser([...user])
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

            <input placeholder="idx"
            value={idx}
            onChange={(e)=>setIdx(e.target.value)}></input>{' '}

            <input placeholder="section"
            value={section}
            onChange={(e)=>setSection(e.target.value)}></input>{'  '}

           <button onClick={updateuser} >Edit</button>
        </div>
       
        </BaseApp>
    )
}