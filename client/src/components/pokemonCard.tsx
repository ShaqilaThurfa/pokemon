import type { Pokemon } from "@/app/page"

type Props = {
  pokemons: Pokemon[]
}

export default function PokemonCard({pokemons}: Props) {
  return (
    
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="badge badge-outline">Fashion</div>
          
          <div className="card-actions justify-end flex-1">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}