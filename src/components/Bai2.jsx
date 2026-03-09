import React, { useEffect, useState } from 'react'

function Bai2() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json()
                setData(data)
                // setTimeout(()=>{
                //     setData(data)
                //     setLoading(false)
                // },1500)

            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
            
            finally{
                setLoading(false)
            }
        }
        setTimeout(()=>{
            getData();
        },3000)
        
    }, [])
        if(loading) return <h3>Loading..</h3>
        if(error !=null) return <h3>{error}</h3>

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

export default Bai2
