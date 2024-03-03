import { SimplePokemon, PokemonsResponse } from "@/pokemons";
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
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="Bulbasaur"
            width={100}
            height={100} 
        />
      </div>
    </div>
  );
}