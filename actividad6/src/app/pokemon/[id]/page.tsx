import Image from 'next/image'
import { PokemonTypes } from "./PokemonTypes";
import { PokemonAbilities } from "./PokemonAbilities";
import PokemonSkeleton from "./PokemonSkeleton";

type Pokemon = {
    name: string;
    sprites: { front_default: string };
    types: {
        slot: number;
        type: { name: string; url: string };
    }[];
    abilities: {
        ability: { name: string; url: string };
        is_hidden: boolean;
        slot: number;
    }[];
};


async function fetchPokemon(id: string): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await res.json();
}

export default async function PokemonCard({params,}: {params: {id: string}} ) {
    const pokemon = await fetchPokemon(params.id);
    
    if (!pokemon) return <PokemonSkeleton />;

    return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-black">
        <h2 className="text-3xl font-bold mb-2 text-yellow-600">
        {pokemon.name.toUpperCase()}
        </h2>

        <Image
        src={pokemon.sprites.front_default}
        alt={`Imagen de ${pokemon.name}`}
        width={300}
        height={300}
        className="drop-shadow-lg mb-2"
        />

        <PokemonTypes types={pokemon.types} />
        <PokemonAbilities abilities={pokemon.abilities} />
    </div>
    );
}