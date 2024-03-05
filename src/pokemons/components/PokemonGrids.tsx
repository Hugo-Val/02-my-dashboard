//"use client"
import Image from 'next/image';
import { PokemonsResponse } from '../interface/pokemons-response';
import { PokemonCard, SimplePokemon } from '..';

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {
                    pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    
                    ))
                }
                       
                        
                    

            </div>
        </div>
    );
}