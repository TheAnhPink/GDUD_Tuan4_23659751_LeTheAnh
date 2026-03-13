import React, { useEffect, useState } from 'react'

function Bai5() {

    const [todos,setTodos] = useState([])
    const [text,setText] = useState("")

    useEffect(()=>{

        const getData = async()=>{

            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")

            if(!res.ok){
                throw new Error("Loi roi")
            }

            const data = await res.json()

            setTodos(data)

        }

        getData()

    },[])

    const addTodo = async()=>{

        const res = await fetch("https://jsonplaceholder.typicode.com/todos",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                title:text,
                completed:false
            })
        })

        const data = await res.json()

        setTodos([...todos,data])

        setText("")

    }

    const deleteTodo = async(id)=>{

        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:"DELETE"
        })

        const newTodos = todos.filter(t => t.id !== id)

        setTodos(newTodos)

    }

    return (
        <div>

            <h3>Todo List</h3>

            <input
                type="text"
                placeholder="Nhap todo"
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />

            <button onClick={addTodo}>Add</button>

            {todos.map((t)=>{
                return (
                    <p key={t.id}>
                        {t.title}
                        <button onClick={()=>deleteTodo(t.id)}>Delete</button>
                    </p>
                )
            })}

        </div>
    )
}

export default Bai5