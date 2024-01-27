import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(req: Request, res: Response) {
  try {
    const user = await db.users.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
