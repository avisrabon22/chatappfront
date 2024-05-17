export const AddUserType = () => {

    
    const [userType, setUserType] = useState({
        name: "",
        description: ""
    })

    const handleChange = (e) => {
        setUserType({
            ...userType,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/user_type/', userType);
            alert('User type added successfully');
        } catch (error) {
            alert('An error occurred');
        }
    }

    return (
        <div>
            <h1>Add User Type</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}