import { createContext } from 'react'

const UserContext = createContext({
    loggedInUser: "Default Login" 
})

export default UserContext;