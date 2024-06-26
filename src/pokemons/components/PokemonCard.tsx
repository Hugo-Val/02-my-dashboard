"use client"

import Link from 'next/link';
import { PokemonGrid } from './PokemonGrids';
import { SimplePokemon } from '../interface/simple-pokemon';
import Image from 'next/image';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';


interface Props {
    pokemon : SimplePokemon;
}

export const PokemonCard = ({ pokemon } : Props) => {
    const { id, name } = pokemon;
    const isFavourite = useSelector((state : any) => state.pokemons[id]);

    
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt={name}
                        width={100}
                        height={100}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ name }</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            More Info
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center" >
                        
                            <div className="text-red-600">
                                {isFavourite ? <IoHeart /> : <IoHeartOutline />}
                                
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    {isFavourite ? "Favourite" : "Not Favourite"}
                                </p>
                                <p className="text-xs text-gray-500">Click to Change</p>
                            </div>
                        
                    </Link>
                    
                </div>

                
            </div>
        </div>
    );
}