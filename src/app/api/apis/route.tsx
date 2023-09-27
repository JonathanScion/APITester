import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const apis = await prisma.apis.findMany();

    console.log(apis);

    return NextResponse.json(apis)

}

