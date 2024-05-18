import { useState } from "react"

export const ChatRoom = ()=>{
    const [message, setMessage]=useState({
        chat:""
    })

    const handleSubmit=()=>{
        console.log(message)

    }


    const handleChange=(e)=>{
       const[name,value]=e.target;
         setMessage({
              ...message,
              [name]:value
         })
    }






    return (
        <>
        <h1>Chat Room</h1>
        <div className="" onSubmit={handleSubmit}>
            <input type="text" name="chat_box" value={message.chat} onChange={handleChange} placeholder="Type your message..." />
            <button type="submit">Send</button>
        </div>
        </>
    )
}