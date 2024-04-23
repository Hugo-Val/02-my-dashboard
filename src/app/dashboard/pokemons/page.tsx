import { SimplePokemon, PokemonsResponse, PokemonGrid } from "@/pokemons";
import Image from "next/image";
import { notFound } from "next/navigation";


export const metadata = {
  title: 'Pokemons List',
  description:'List of all pokemons in the world.'
};


const getPokemons = async (limit: number): Promise<SimplePokemon[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data: PokemonsResponse = await response.json();

    const pokemons = data.results.map( pokemon => {
        const urlParts = pokemon.url.split("/");
        const id = urlParts[urlParts.length - 2];
        return {
            id: parseInt(id),
            name: pokemon.name
        }
    });

    // throw new Error("Not implemented yet");
    // throw notFound();

    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-3xl font-bold text-center">Pokemons List <small className="text-blue-500">static</small></span>
      
        <PokemonGrid pokemons={pokemons} />
    </div>
  );
}