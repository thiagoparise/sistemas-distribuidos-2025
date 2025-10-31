type Type = {
    type: {
    name: string;
    };
};

export function PokemonTypes({ types }: { types: Type[] }) {
    return (
    <div className="mt-4">
        <h3 className="text-lg font-semibold text-cyan-500 mb-2">Types</h3>
        <ul className="flex flex-wrap gap-2">
        {types.map((t, index) => (
            <li
            key={index}
            className="bg-cyan-300 text-black px-3 py-1 rounded-full shadow-md hover:bg-cyan-400 transition-colors"
            >
            {t.type.name.toUpperCase()}
            </li>
        ))}
        </ul>
    </div>
    );
}
