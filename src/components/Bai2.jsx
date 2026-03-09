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

            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
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

export default Bai2
