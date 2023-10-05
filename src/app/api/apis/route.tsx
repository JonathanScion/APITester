import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    //const apis = await prisma.apis.findMany();
    const apis = await prisma.$queryRaw`SELECT * FROM apis`;

    console.log(apis);

    return NextResponse.json(apis);

}

