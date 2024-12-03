import PokemonCard from "@/components/pokemonCard";
import Image from "next/image";

export type Pokemon = {
    id: number,
    name: string,
    type: string,
    description: string,
    weight: string,
    image: string
}

export default async function Home() {

  const url = "http://localhost:3002/pokemon";
  
    const response = await fetch(url, {
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const pokemons: Pokemon[] = await response.json();
    // console.log(pokemons);
    // return pokemons

  return ( 
       <div>    
        <PokemonCard pokemons = {pokemons}/>
    </div>
  );
}
