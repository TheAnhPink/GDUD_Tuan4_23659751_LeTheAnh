import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Bai1 from './components/bai1'
import Bai1_Async_Await from './components/Bai1_Async_Await'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'

function App() {
  const [bai, setBai] = useState("bai1")
  return (
    <>
      <button onClick={() => { setBai("bai1") }}>Bài 1 Fetch</button>
      <button onClick={() => { setBai("bai1_a") }}>Bài 1 Async Await</button>
      <button onClick={() => { setBai("bai2") }}>Bài 2</button>
      <button onClick={() => { setBai("bai3") }}>Bài 3</button>

      {bai === "bai1" && <Bai1 />}
      {bai === "bai1_a" && <Bai1_Async_Await />}
      {bai === "bai2" && <Bai2 />}
      {bai === "bai3" && <Bai3 />}


    </>
  )
}

export default App
