import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1"

const UserApi = {
    loginUser: async (userData) =>{
        try {
            const response = await axios.post(`${BASE_URL}/login`,userData, { withCredentials: true })
            return response;
        }
        catch (err) {
            console.log(err);
        }
    },
    createUser: async (userData) =>{
        return  await axios.post(`${BASE_URL}/signup`,userData, { withCredentials: true })
    },
}



export default UserApi;
