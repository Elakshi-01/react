import React, { useContext } from "react";
import Usercontext from "../context/Usercontext";

const Profile = () =>{

const {user}=useContext(Usercontext);

if(!user){
    return <div>Please Login</div>
}else {
    return <div>Welcome {user.username}</div>
}

}

export default Profile