import React, { useState } from "react";

export function AddUser(){
    //defining states
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState();
    const [batch, setBatch]= useState("");

    const addNewUser = ()=>{
        const newUser = {
            id,
            name,
            email,
            batch,
            experience
        }
        console.log(newUser)
    } 
    
    return (
        <div>
                <input 
                placeholder="id"
                value ={id}
                onChange={(event)=>setId(event.target.value)}
                />

                <input 
                placeholder="name"
                value= {name}
                onChange={(event)=>setName(event.target.value)}
                />

                <input 
                placeholder="email"
                value= {email}
                onChange={(event)=>setEmail(event.target.value)}
                />

                <input 
                placeholder="experience"
                value = {experience}
                onChange={(event)=>setExperience(event.target.value)}
                />

                <input 
                placeholder="batch"
                value = {batch}
                onChange={(event)=>setBatch(event.target.value)}
                />

                <button
                onClick={addNewUser}
                >Add</button>
        </div>
    )
}