import React, { useState } from 'react'

//Basic increment and decrement operations using useState()
const Eg1 = () => {
    const[num, setNum]=useState(0)

    function increment(){
        setNum((num)=>num+1)
    }
    function decrement(){
        setNum((num)=>num-1)
    }

  return (
    <div className='eg1'>
        <button onClick={increment}>+</button>
        <span>{num}</span>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Eg1