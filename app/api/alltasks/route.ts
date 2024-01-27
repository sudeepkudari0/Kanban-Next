import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";

export async function GET(req: Request, res: Response){
    try {
        const user = await currentUser();
        
        const task = await db.tasks.findMany({
            where: {
                assignedToId: user?.id
            },
            select: {
                id: true,
                title: true,
                description: true,
                priority: true,
                duedate: true,
                status: true
            }
        });
        return NextResponse.json(task);
    } catch (error) {
        console.log("[SERVERS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}