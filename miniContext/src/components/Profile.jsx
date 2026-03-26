import React from 'react'
import {useContext} from 'react'
import UserContextProvider from '../Context/UserContextProvider'
import UserContext from '../Context/UserContext'
function Profile() {

    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.userName}</div>
}

export default Profile