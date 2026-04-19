import React, { useState } from 'react'


const App = () => {
   let [count,setCount] = useState(0);

  return (
    <div  className='justify-center h-screen flex flex-col'>
        <h1 className = "bg-red-900">Count  is {count}</h1>
        <button  onClick ={()=>{
          setCount(count+1w)
          console.log(count)
        }} className='bg-blue-500'>Increment</button>
    </div>
  )
}

export default App
