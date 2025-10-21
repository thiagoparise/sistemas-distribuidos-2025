type Ability = {
    ability: {
    name: string;
    };
};

export function PokemonAbilities({ abilities }: { abilities: Ability[] }) {
    return (
    <div className="mt-4">
        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Abilities</h3>
        <ul className="flex flex-wrap gap-2">
        {abilities.map((a, index) => (
            <li
            key={index}
            className="bg-yellow-300 text-black px-3 py-1 rounded-full shadow-md hover:bg-yellow-400 transition-colors"
            >
            {a.ability.name.toUpperCase()}
            </li>
        ))}
        </ul>
    </div>
    );
}
