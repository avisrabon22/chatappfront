import { useEffect, useState } from "react";
import UserTypeSignupApi from "../../API/UserTypeSignupApi";
import UserApi from "../../API/UserApi";
import ToastService from "../Toast";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigator = useNavigate();
    const [userType, setUserType] = useState([]);
    const [err,setErr] = useState(null);

    const handleUserType = async () => {
     try {
         const response =  await UserTypeSignupApi.getUserTypeSignup();
         setErr(response.data);
         const userTypeList = response.data.map(item => item);
            setUserType(userTypeList);

     } catch (error) {
            setErr(error.response.data);
            console.log(error);
        }
       
    }

    useEffect(() => {
        handleUserType();
    }, [])

    useEffect(() => {
            ToastService.error(err);
        
    }, [err])

const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    role: ""
})

const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
        ...userData,
        [name]: value
    })
}

    const handleSubmit= async (e) =>{
        e.preventDefault();
        try {
            const response = await UserApi.createUser(userData);
                ToastService.success(response.data);
                navigator("/");
                
        }
        catch (error) {
            ToastService.error(error.response.data);
            console.log(error.response.data);
        }
          
    }



    return (
        <>
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <input type="email" name="email" value={userData.email}  onChange={handleChange} placeholder="Enter your mail id" required className="border border-gray-300 rounded-md px-4 py-2 mb-2" />

            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Enter password" required className="border border-gray-300 rounded-md px-4 py-2 mb-2" />

            <input type="text" name="name" value={userData.name}  onChange={handleChange} placeholder= "Enter your name" required className="border border-gray-300 rounded-md px-4 py-2 mb-2" />

            <select name="gender" value={userData.gender} onChange={handleChange}  required className="border border-gray-300 rounded-md px-4 py-2 mb-2">
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
            </select>

            <select name="role" value={userData.role} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 mb-2">
                <option value="">Select Role</option>
                 {userType.map(item=>
                    <option key={item.id} value={item.role}>{item.role}</option>
                 )}
            </select>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
        </form>
        </>
    )
    }