export default function PokemonsLoading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-yellow-400">
        <div className="relative flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="absolute text-2xl font-bold animate-pulse drop-shadow-lg">
            ⚡
            </span>
        </div>
        <p className="mt-6 text-xl font-semibold tracking-wide animate-pulse">
            Cargando Pokémon...
        </p>
        </div>
    );
}
