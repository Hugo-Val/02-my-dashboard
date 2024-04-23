import { SimplePokemon, PokemonsResponse, PokemonGrid } from "@/pokemons";
import Image from "next/image";
import { notFound } from "next/navigation";


export const metadata = {
  title: 'Favorites List',
  description:'List of all favorites pokemons in the world.'
};




export default async function PokemonsPage() {

    

  return (
    <div className="flex flex-col">
      <span className="text-3xl font-bold text-center">Pokemons Favorites <small className="text-blue-500">Global State</small></span>
      
        <PokemonGrid pokemons={[]} />
    </div>
  );
}