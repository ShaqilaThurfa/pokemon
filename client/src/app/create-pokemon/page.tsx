'use client'

import { useState } from "react";

export default function Page() {

  const [name, setName ] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")

  const handleOnsubmit = async(e) => {
    e.preventDefault()
    await fetch("http://localhost:3002/pokemon", {
      method: "POST",
      body: JSON.stringify(
        {name,
        description,
        image,
        type,}
      ),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (

    <div>
      <form>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)} />
        
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Image" value={image} onChange={(e)=> setImage(e.target.value)} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="type" value={type} onChange={(e)=> setType(e.target.value)}  />
      </label>

      <button className="btn" onClick={handleOnsubmit}>
        Submit
      </button>

     
      </form>

      

    </div>
    
  )
}

