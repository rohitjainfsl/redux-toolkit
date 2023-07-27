import React from 'react'
import UserProfile from './UserProfile'
import UserHOC from './UserHOC'
const NewUserName = UserHOC(<UserProfile name="rohit" />)

function App() {

  return (
    // <UserProfile name='Rohit'/>
    <NewUserName name='Rohit' />
  )
}

export default App