import { useState } from 'react'

export const LoggedIn  =() =>{
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const [message,setMessage] = useState('');

    const handleLogin=()=>
    {
        setIsLoggedIn(true);
        displayMessage();
    }

    const handleLogout=()=>{
        setIsLoggedIn(false);
        displayMessage();
    }

    function displayMessage()
    {
        let msg
        msg= isLoggedIn ===true ? 'User is logged in' : 'User is logged out'
        setMessage(msg)
    }
    return(
        
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>{message}</div>
        </div>
    )
}