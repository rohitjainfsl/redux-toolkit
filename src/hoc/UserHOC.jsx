/* eslint-disable no-unused-vars */
import React from 'react'

function UserHOC(Component) {
  console.log(Component.props)
    function EnhancedComponent({name}){
        return name.toUpperCase()
    }
    return EnhancedComponent()
}

export default UserHOC