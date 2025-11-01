import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {
        const body = await request.json();
        
        if (!body.name || !body.id ) {
            return NextResponse.json(
                { error: "Required fields are missing: name and ID."},
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "The item was created successfully." },
            { status: 201 }
        )
    } catch {
        return NextResponse.json(
            { error:"Wasn't able to parse the request."},
            { status: 404 }
        );
    }
}