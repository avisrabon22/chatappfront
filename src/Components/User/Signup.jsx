import { useState } from "react";

export const Signup = () => {

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

    const handleSubmit= (e) =>{
        e.preventDefault();
     console.log(userData);
     

     setUserData ({
        email: "",
        password: "",
        name: "",
        gender: "",
        role: ""
    })

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
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <select name="role" value={userData.role} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 mb-2">
                <option value="Selct">Select Role</option>
                <option ></option>
            </select>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
        </form>
        </>
    )
    }