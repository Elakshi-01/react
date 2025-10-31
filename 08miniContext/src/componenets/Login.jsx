import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";

const Login = () => {

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const {setUser}=useContext(Usercontext);
const handler = (e) =>{
e.preventDefault();
setUser({username,password});

}

    return (

<div>
    <h2>Login</h2>
    <input
    placeholder="enter username"
    value={username}
    onChange={(e)=>{
setUsername(e.target.value)
    }}
    type="text" />
   <input
    placeholder="enter password"
    value={password}
    onChange={(e)=>{
setPassword(e.target.value)
    }}
    type="text" />

<button  onClick={handler}          >Submit</button>
</div>



    )
}

export default Login;