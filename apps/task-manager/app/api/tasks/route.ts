import prisma from "../../lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();

    const user = await prisma.task.create({
      data: json,
    });

    return new NextResponse(JSON.stringify(user), {
     status: 201,
     headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("Task with id already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}
