'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Page() {

  const router = useRouter()
  const [name, setName ] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")
  const [weight, setWeight] = useState("")

  const handleOnsubmit = async(e) => {
   try {
    e.preventDefault()

    if(!name){
      throw new Error ("Name must be input!")
    }
    if(!description){
      throw new Error ("Description must be input!")
    }
    if(!image){
      throw new Error ("Image must be input!")
    }
    if(!type){
      throw new Error ("Type must be input!")
    }
    
    await fetch("http://localhost:3002/pokemon", {
      method: "POST",
      body: JSON.stringify(
        {name,
        description,
        image,
        type,
        weight}
      ),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push('/')
    
   } catch (error) {
    console.log(error)
    
   }
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
        <input type="text" className="grow" placeholder="weight" value={weight} onChange={(e)=> setWeight(e.target.value)} />
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

