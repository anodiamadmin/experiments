import React from 'react'
import {SignIn} from './SignIn'
import { ProfileProps } from './Profile'

type PrivateProps={
    isLoggedIn:boolean
    component:React.ComponentType<ProfileProps>
}
export const Private = ({isLoggedIn,component:Component}:PrivateProps) => {
  if(isLoggedIn)
    return <Component name='Sanjeev'/>
  else
    return <SignIn/>
}