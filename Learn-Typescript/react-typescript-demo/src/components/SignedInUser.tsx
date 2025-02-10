import { useState } from 'react'

type Authuser={
    name:string
    email:string
}

export const SignedInUser  =() =>{
    // Considering the scenario where the user would never be null.
    const [loggedInUser,setLoggedInUser] = useState<Authuser>({} as Authuser)

    const handleLogin=()=>
    {
        setLoggedInUser({
            name:"Ranjan",
            email:"ranjankd@gmail.com"
        })
    }

    return(
        
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {loggedInUser.name}</div>
            <div>User email is {loggedInUser.email}</div>
        </div>
    )
}