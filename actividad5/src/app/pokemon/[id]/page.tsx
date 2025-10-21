"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { PokemonTypes } from "./PokemonTypes";
import { PokemonAbilities } from "./PokemonAbilities";
import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonCard() {
    const params = useParams<{ id: string }>();

    const [pokemon, setPokemon] = useState();
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            .then((response) => setPokemon(response.data));
    }, []);

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


export function PokemonSkeleton() {
    return (
    <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        </div>
    </div>
    );
}