import type { Pokemon } from "@/app/page"

type Props = {
  pokemons: Pokemon[]
}

export default function PokemonCard({ pokemons }: Props) {

  const handleOnDelete = async(id) => {
    try {
     e.preventDefault()
     
     await fetch(`http://localhost:3002/pokemon/${id}`, {
       method: "DELETE",
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
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id}>

            <div className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={pokemon.image}
                  alt={pokemon.name}/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{pokemon.name}</h2>
                <div className="badge badge-outline">{pokemon.type}</div>

                <div className="card-actions justify-end flex-1">
                  {/* <button className="btn btn-primary" onClick={handleOnDelete(pokemon.id)}>Delete</button> */}
                  {/* <button className="btn btn-primary" onClick=`/pokemon`>Detail</button> */}
                  {/* <Link href=`/pokemon/${pokemon.id}`>Detail</Link> */}
                  
                </div>
              </div>
            </div>

          </div>
        )
      })}

    </div>
  )
}