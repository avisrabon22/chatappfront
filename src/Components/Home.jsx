import { useState } from "react";
import ToastService from "./Toast";
import { useNavigate } from "react-router-dom";
import UserApi from "../API/UserApi";
import axiosInstance from "../Components/Auth/AxiosInstance";




export const Home = () => {
    const navigator = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const loginApi = async () => {
        try {
            const response = await UserApi.getUser(userData);
            console.log(response);
            if (response.status === 200 && response.data != null) {
                navigator("/chat_room")
                ToastService.success(response.data)
            }
            else {
                ToastService.error("Invalid Credentials")
            }
        }
        catch (err) {
            console.log(err);
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userData);

        if (userData.username.trim().length === 0 || userData.password.trim().length === 0) {
            ToastService.error("Please fill all the fields")
            setUserData({
                username: "",
                password: ""
            })
        }
        else {
            loginApi();
        }

    }

   

    return (
        <>
            <h1>Home</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username" autoComplete="false" />
                <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" autoComplete="false" />
                <button type="submit">Login</button>
            </form>
        </>
    )


}

