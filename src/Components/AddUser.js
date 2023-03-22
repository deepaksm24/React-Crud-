import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function AddUser({user, setUser}){
    const history = useHistory()
    //defining states
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState();
    const [batch, setBatch]= useState("");

    const addNewUser = ()=>{

if(id!==""){
        const newUser = {
            id,
            name,
            email,
            batch,
            experience
        }
       
        setUser([...user, newUser])
        history.push("/")
    }
    } 
    
    return (
        <BaseApp
        title={"Add A New User"}
        >
           
             <div>
                <input 
                placeholder="id"
                value ={id}
                onChange={(event)=>setId(event.target.value)}
                />
                <br/>
                <input 
                placeholder="name"
                value= {name}
                onChange={(event)=>setName(event.target.value)}
                />
<br/>
                <input 
                placeholder="email"
                value= {email}
                onChange={(event)=>setEmail(event.target.value)}
                />
<br/>
                <input 
                placeholder="experience"
                value = {experience}
                onChange={(event)=>setExperience(event.target.value)}
                />
<br/>
                <input 
                placeholder="batch"
                value = {batch}
                onChange={(event)=>setBatch(event.target.value)}
                />
<br/>
                <button
                onClick={addNewUser}
                >Add</button>
        </div>
        </BaseApp>
    )
}