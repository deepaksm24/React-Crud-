import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

export function EditUser({user, setUser}){

    const history = useHistory();

    const {id} = useParams();
    const selectedUser = user.find((per) => per.id===id);
    console.log(selectedUser);
    //defining states
    const [name, setName] = useState(selectedUser.name);
    const [idx, setIdx] = useState(selectedUser.id);
    const [email, setEmail] = useState(selectedUser.email);
    const [experience, setExperience] = useState(selectedUser.experience);
    const [batch, setBatch]= useState(selectedUser.batch);


// useEffect(()=>{
// setIdx(selectedUser.id);
// setName(selectedUser.name);
// setEmail(selectedUser.email);
// setExperience(selectedUser.experience);
// setBatch(selectedUser.batch);
//  },[])

const updateUser=()=>{
    const uppUser = {
        id:idx,
        name,
        email,
        batch,
        experience
    }
const editindex = user.findIndex((per) => per.id===id);

    console.log("edit button",user[editindex]);
user[editindex] = uppUser;
setUser([...user]);
history.push("/")


}
    return (
        <BaseApp
        title={"Edit a User"}
        >
             <div>
                <input 
                placeholder={idx}
                value={idx}
                onChange={(event)=>setIdx(event.target.value)}
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
                onClick={updateUser}
                >Edit</button>
        </div>
        </BaseApp>
    )
}