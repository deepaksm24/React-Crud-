import React, { useState } from "react";
import BaseApp from "../Core/Base";
import { data } from "../Data/data.js";
import { AddUser } from "./AddUser";

export default function UserComponent(){
    const [user, setUser] = useState(data)

   //functionality 
   const deleteUser = (idx)=>{
    const alterList = user.filter((per)=>per.id !== idx);
     setUser(alterList)
   }
  
    return (
        <BaseApp
        title= "User Details">
          <div className="user-content">
            <AddUser/>
             {user.map((person, idx)=>(
                <div key ={idx} className="user-card">
                    <h1>{person.name}</h1>
                    <p>Batch : {person.batch}</p>
                    <p>Email : {person.email}</p>
                    <p>Exp : {person.experience}</p>

                    <div className="btn-group">
                        <button className="btn edit-btn">Edit</button>

                        <button 
                        className="btn del-btn"
                        onClick={()=>deleteUser(person.id)}
                        >Delete</button>
                    </div>

                </div>
             ))}
          </div>
        </BaseApp>
    )
}