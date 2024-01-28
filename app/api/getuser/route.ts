import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
export async function GET(req: Request, res: Response) {
  try {
    const userData = await currentUser();
  const id = await userData?.id;
  console.log(id);
    const user = await db.users.findUnique({
      where: {
        userId: id,
      },
        select: {
        name: true,
      },
    });
    if (!user) {
        return new NextResponse("User not found", { status: 404 });
        
    }
    return NextResponse.json(user);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export const dynamic = "force-dynamic"