"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function PokemonListSkeleton() {
    const placeholders = Array.from({ length: 6 });

    return (
    <>
        <h1 className="text-5xl font-extrabold text-yellow-500 text-center my-8 drop-shadow-lg">
        <Skeleton className="h-12 w-72 mx-auto" />
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {placeholders.map((_, index) => (
            <li
            key={index}
            className="flex flex-col items-center justify-center cursor-pointer hover:bg-cyan-800 rounded-lg p-4 w-48 h-32"
            >
            <Skeleton className="h-4 w-32" /> {/* nombre */}
            </li>
        ))}
        </ul>
    </>
    );
}