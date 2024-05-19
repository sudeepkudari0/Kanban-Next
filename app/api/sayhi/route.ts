import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";

export async function GET(req: Request, res: Response){
    try {
       
        return NextResponse.json({message: "Hello"});
    } catch (error) {
        console.log("[SERVERS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export const dynamic = "force-dynamic"