import React, { useEffect, useState } from 'react'

function Bai4() {
    const [dsPosts, setPosts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            if(!res.ok){
                throw new Error("loi roi")
            }
            const data = await res.json()
            console.log(data)
            
            setPosts(data)
        }

        getData();
    },[])

    const timPost=(e)=>{
        const post= dsPosts.filter((p)=>{return p.title.includes(e.target.value)})
        setPosts(post)
    }

    return (
        <div>
            <input type="text" placeholder='Nhap tittle de tim' onChange={timPost}  name="" id="" />
            {dsPosts.map((p)=>{
                return <p key={p.id}><b>Title</b>: {p.title} - <b>Body</b>:{p.body}</p>
            })}
        </div>
    )
}

export default Bai4
