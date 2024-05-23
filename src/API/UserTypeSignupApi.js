import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/usertype"


const UserTypeSignupApi = {
    getUserTypeSignup: async () =>{
        try {
        const response=await axios.get(`${BASE_URL}/getusertypesignup`, { withCredentials: true });
        return response;
        }
        catch (err) {
            console.log(err);
        } 
    }

}


export default UserTypeSignupApi;