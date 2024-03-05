import { SimplePokemon, PokemonsResponse, PokemonGrid } from "@/pokemons";
import Image from "next/image";





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

    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-3xl font-bold text-center">Pokemons List <small>static</small></span>
      
        <PokemonGrid pokemons={pokemons} />
    </div>
  );
}