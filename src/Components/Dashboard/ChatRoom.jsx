import { useState } from "react"

export const ChatRoom = ()=>{
    const [message, setMessage]=useState({
        chat:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(message)

        setMessage({
            chat:""
        })

    }

    const handleChange=(e)=>{
       const[name,value]=e.target;
         setMessage((msg)=>({
                ...msg,
                [name]:value
         })
            )
    }

    return (
        <>
        <h1 className="text-2xl font-bold">Chat Room</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
            <input className="border border-gray-300 rounded px-4 py-2 mr-2" type="text" name="chat" value={message.chat} onChange={handleChange} placeholder="Type your message..." />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Send</button>
        </form>
        </>
    )
}