import React from 'react'
import userContext from '../context/userContext'
import { useContext } from 'react';

const ProfileInfo = () => {
  const userContextData=useContext(userContext);
  return (
    <div>Profileinfo

<div>
         {/* {JSON.stringify(userContextData)}   
     <h3>Welcome {userContextData.user.data.first_name} {userContextData.user.data.last_name} </h3> 
     <h3>user is logged in {userContextData.user.login ? 'true' : 'false'}</h3> */}

  </div>
    </div>
  )
}

export default ProfileInfo