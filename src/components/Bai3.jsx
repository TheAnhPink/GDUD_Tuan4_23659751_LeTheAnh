import React, { useState } from 'react'

function Bai3() {
    const [user,setUser]= useState(null)
    const[loi, setLoi]= useState("")
    const timUser=(e)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${e.target.value}`)
         .then(res=>{
            if(!res.ok){
                throw new Error("User not found")
            }
            return res.json()
        })
        .then(data=>{setUser(data)
                    setLoi("")})
        .catch(()=>{setLoi("User not found") 
                    setUser(null)})
        
    }
  return (
    <div>
      <input type="text" placeholder='Nhập userID' name="" id="" onChange={timUser}/>
        <p>Thông tin user: {user && user.name} {loi}</p>
    </div>
  )
}

export default Bai3
