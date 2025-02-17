import { useState } from 'react'

type Authuser={
    name:string
    email:string
}

export const User  =() =>{
    const [loggedInUser,setLoggedInUser] = useState<Authuser|null>(null)

    const handleLogin=()=>
    {
        setLoggedInUser({
            name:"Vishwas",
            email:"Vishwasmg@gmail.com"
        })
    }

    const handleLogout=()=>{
        setLoggedInUser(null);
    }

    return(
        
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {loggedInUser?.name}</div>
            <div>User email is {loggedInUser?.email}</div>
        </div>
    )
}