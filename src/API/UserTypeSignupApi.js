import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/usertype"


const UserTypeSignupApi = {
    getUserTypeSignup: async () =>{
       return await axios.get(`${BASE_URL}/getusertypesignup`, { withCredentials: true });
        
    }

}


export default UserTypeSignupApi;