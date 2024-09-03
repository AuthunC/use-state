import React, { useState } from 'react'
import { FaBeer } from "react-icons/fa";

const Eg2 = () => {
    const [name,setName]=useState("AA")
    const handleChange=()=>{
        const names=["Authun","Ayyati","AA"]
        const randomName=Math.floor(Math.random()*3)
        setName(names[randomName])
        
    }
  return (
    <div className='eg2'>
        <p>Hey {name} !! <FaBeer /></p>
        <button onClick={handleChange}>Click Me</button>
    </div>
  )
}

export default Eg2