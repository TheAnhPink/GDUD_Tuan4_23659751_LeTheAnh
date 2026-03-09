import React, { useEffect, useState } from 'react'

function Bai1() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setData(data)
        },[])
    })
  return (
    <div>
        <h1>Bai 1 fetch</h1>
        {data.map((d)=>{
            return <div key={d.id}>
                        <h3>Name: {d.name} - Email: {d.email}</h3>
                    </div>
        })}
      
    </div>
  )
}

export default Bai1
