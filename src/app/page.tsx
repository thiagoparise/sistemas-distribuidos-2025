"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import PokemonItem from "./PokemonItem";
import { PokemonListSkeleton } from "./PokemonListSkeleton";
import { useState } from "react";

type Pokemon = {
  name: string;
  url: string;
}

async function fetchPokemons(limit: number): Promise<Pokemon[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const json = await res.json();
  return json.results;
}

export default function PokemonList() {

  const [elementsShowed, setElementsShowed] = useState<number>(30);

  const { data, isLoading, isFetching,  error } = useQuery<Pokemon[]>({
    queryKey: ["pokemons", elementsShowed],
    queryFn: () => fetchPokemons(elementsShowed),
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <PokemonListSkeleton/>
  if (error) return <p>Error al cargar</p>;

  function handleLoadMore() {
    setElementsShowed(elementsShowed + 30);
  }

  
  return (
    <>
      <h1 className="text-5xl font-extrabold text-yellow-500 text-center my-8 drop-shadow-lg">
        Bienvenido a mi Pokedex!
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {data?.map((pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop()!;
          return (
            <PokemonItem key={id} id={id} name={pokemon.name} />
          );
        })}
      </ul>
      <button type='button' onClick={handleLoadMore} className="mt-10 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition-all duration-200 mx-auto block">
        Cargar mas
      </button>
    </>
  )
}
