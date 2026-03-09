import React, { useEffect, useState } from 'react'

function Bai1_Async_Await() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData=async ()=>{
            const res= await fetch("https://jsonplaceholder.typicode.com/users")
            const data= await res.json()
            setData(data)
        }
        getData();
            }, [])
    
    return (
        <div>
            <h1>Bai 1 fetch</h1>
            {data.map((d) => {
                return <div key={d.id}>
                    <h3>Name: {d.name} - Email: {d.email}</h3>
                </div>
            })}
        </div>
    )
}

export default Bai1_Async_Await
