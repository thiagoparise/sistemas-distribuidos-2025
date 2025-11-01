import { NextResponse } from "next/server";
import { delete } from "pokemonServices";

export async function DELETE( request: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    if (isNaN(id)) {
        return NextResponse.json(
            { error: "El ID debe ser un número válido" },
            { status: 400 }
        )
    };
    pokemonServices.delete(id);

    return NextResponse.json(
        { message: "The item was removed successfully."},
        { status: 200 }
    );
}