import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Bai1 from './components/bai1'
import Bai1_Async_Await from './components/Bai1_Async_Await'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'

function App() {
  const [bai, setBai] = useState("bai1")
  return (
    <>
      <button onClick={() => { setBai("bai1") }}>Bài 1 Fetch</button>
      <button onClick={() => { setBai("bai1_a") }}>Bài 1 Async Await</button>
      <button onClick={() => { setBai("bai2") }}>Bài 2</button>
      <button onClick={() => { setBai("bai3") }}>Bài 3</button>
      <button onClick={() => { setBai("bai4") }}>Bài 4</button>
      <button onClick={() => { setBai("bai5") }}>Bài 5</button>

      {bai === "bai1" && <Bai1 />}
      {bai === "bai1_a" && <Bai1_Async_Await />}
      {bai === "bai2" && <Bai2 />}
      {bai === "bai3" && <Bai3 />}
      {bai === "bai4" && <Bai4 />}
      {bai === "bai5" && <Bai5 />}


    </>
  )
}

export default App
