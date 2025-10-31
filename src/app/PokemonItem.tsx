import Link from "next/link";

type Pokemon = {
    name: string,
    id: string,
}

export default function PokemonItem({ name, id }: Pokemon) {
    return (
        <li className="cursor-pointer p-2" key={id}>
            <Link
            href={`/pokemon/${name}`}
            className="block p-4 border rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-all"
            >
            <h3 className="text-lg font-semibold">{name}</h3>
            </Link>
        </li>
    );
}