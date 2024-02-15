import { db } from "@/lib/db";
import { Tasks } from "@/types";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response){
    try {
        const { name, description, userId, priority, dueDate } = await req.json();
        // console.log({name, description, userId, priority, dueDate})
        const getUserId = await db.users.findUnique({
            where: {
                id: userId
            },
            select: {
                userId: true,
                name: true
            }
        });
        const assignedToId: string | undefined = getUserId?.userId;
        const userName: string | undefined = getUserId?.name;
        // console.log(RuserId);
        const task: Tasks = await db.tasks.create({
            data: {
                title: name,
                description :description,
                assignedToId: assignedToId as string,
                priority,
                userName: userName as string,
                duedate: dueDate,
                status: "OPEN"
            }
        });
        return NextResponse.json(task);
    } catch (error) {
        console.log("[SERVERS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export const dynamic = "force-dynamic"