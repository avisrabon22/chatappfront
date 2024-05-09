
export const Home = ()=>{
    const [userData,setUserData] = useState({})

    const data = {
        username: "",
        password: ""
    }

    const handleOnChange = (e)=>{
        const {name,value} = e.target
        setUserData({...userData,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
     console.log(userData);
    }

    return (
        <>
        <h1>Home</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" onChange={data.username} placeholder="Username" autoComplete="false" />
            <input type="password" onChange={data.password} placeholder="Password" autoComplete="false"/>
            <button type="submit">Login</button>
        </form>
        </>
    )
    }
