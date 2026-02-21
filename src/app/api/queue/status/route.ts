import prisma from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        const desk1 = await prisma.queueTicket.findFirst({
            where: {
                status: "CALLING",
                counterNumber: "ONE"
            },
            orderBy: { updatedAt: "desc" }
        });
    
        const desk2 = await prisma.queueTicket.findFirst({
            where: {
                status: "CALLING",
                counterNumber: "TWO"
            },
            orderBy: { updatedAt: "desc" }
        });

        return NextResponse.json({ desk1, desk2 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error();
    }
}