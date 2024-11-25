type Props = {
  params: number
}

import type { Pokemon } from "@/app/page";

export default async function Page({params}: Props ) {

  
    const url = "http://localhost:3002/pokemon/"+ params.id;
   
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const pokemon: Pokemon = await response.json();
      // console.log(pokemon);
   
  
  
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      
      <figure>
        <img
          src={pokemon.image}
          alt={pokemon.name}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{pokemon.name}</h2>
        <p>{pokemon.description}</p>
        <div className="badge badge-outline">{pokemon.type}</div>
        <div className="badge badge-outline">{pokemon.weight}</div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  )
}