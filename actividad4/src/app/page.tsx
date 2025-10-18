"use client";

import { useEffect, useState } from "react";
import axios from 'axios';

type Pokemon = {
  name: string;
  id: number;
}

export default function PokemonList() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect( () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
        setPokemons(
          response.data.results.map(
            (element: {name: string}, index: number) => ({
              id: index + 1,
              name: element.name,
            })
          )
        );
      })
  }, []);

  return (
    <>
      <h1 className="text-4xl font-extrabold text-yellow-500 text-center my-8 drop-shadow-lg">
        Bienvenido a mi Pokedex!
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.id} id={pokemon.id} name={pokemon.name} />
        ))}
      </ul>
    </>
  )
}

export function PokemonItem({ name, id }: Pokemon) {

  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <li onClick={handleClick} className="cursor-pointer hover:bg-cyan-800 rounded-full p-2">
      <span>{name.toLocaleUpperCase()}</span>
      <span>{clicks}</span>
    </li>

  );
}
