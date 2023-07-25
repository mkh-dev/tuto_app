import axios from 'axios'
import React from 'react'
import {useNavigate } from 'react-router-dom'

const Hello = () => {
    const navigate=useNavigate()

    const handleLogout=()=>{
        axios.get('user/logout',{
            
        }).then((response)=>{
            console.log(response)
            if(response.data.msg==="user logout"){
                navigate("/")
              }
              
            })
            .catch((error)=>{
              console.log(error)
        })
    }
  return (
    <div>
      Welcome !
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Hello
