type Props = {
  type: string
}

import type { Pokemon } from "@/app/page";

export default async function Page({ params }: Props) {


  const url = "http://localhost:3002/pokemon?type=" + params.type;

  const response = await fetch(url, {
    cache: "no-store"
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const pokemon: Pokemon[] = await response.json();
  // console.log(pokemon);
  return (
    <div className=" flex card card-side bg-base-100 shadow-xl">

      {pokemon.map((pokemon) => {
        
        return (

          <div key= {pokemon.id}>
            
            <figure>
              <img
                src={pokemon.image}
                alt={pokemon.name} />
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

      })}


    </div>
  )
}