
export const Home = ()=>{
    const [userData,setUserData] = useState({})
    return (
        <>
        <h1>Home</h1>

        <form>
            <input type="text" placeholder="Username" autoComplete="false" />
            <input type="password" placeholder="Password" autoComplete="false"/>
            <button type="submit">Login</button>
        </form>
        </>
    )
    }
