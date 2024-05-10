import { useState } from "react"
import ToastService from "./Toast"
import axios from "axios"


export const Home = ()=>{

    const [userData,setUserData] = useState({
        username:"",
        password:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setUserData({
            ...userData,
            [name]:value
        })
    }

    const loginApi = async()=>{
        try{
            const response = await axios.get("http://localhost:8000/api/v1/chatroom/getchat")
            console.log(response);
            response.status === 200 ? ToastService.success("Login Success") : ToastService.error("Login Failed")
        }
        catch(err){
            console.log(err);
        }
    }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(userData);
   
    if(userData.username.trim().length === 0 || userData.password.trim().length === 0) {
        ToastService.error("Please fill all the fields", { autoClose: 2000})
        setUserData({
            username:"",
            password:""
            })
    }
    else{
       loginApi();
    }

}


    return (
        <>
        <h1>Home</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username" autoComplete="false" />
            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" autoComplete="false"/>
            <button type="submit">Login</button>
        </form>
        </>
    )


    }

