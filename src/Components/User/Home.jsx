import { useState } from "react";
import ToastService from "../Toast";
import { useNavigate } from "react-router-dom";
import UserApi from "../../API/UserApi";




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
            const response = await UserApi.loginUser(userData);
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
            ToastService.error("Something went wrong");
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

   const handleSignup = () => {
        navigator("/sign_up")
    }

    return (
        <>
            <h1 className="flex justify-center text-4xl font-bold">Chat Room Login</h1>

            <form className="flex flex-col items-center mt-8" onSubmit={handleSubmit}>
                <input className="border border-gray-300 rounded-md px-4 py-2 mb-4" type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username" autoComplete="false" required />
                <input className="border border-gray-300 rounded-md px-4 py-2 mb-4" type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" autoComplete="false" required />
                
                <div className="flex justify-between w-fit">
                    <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
                    <button className="bg-green-500 hover:bg-green-700 active:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={handleSignup}>Signup</button>
                </div>
            </form>
        </>
    )


}

