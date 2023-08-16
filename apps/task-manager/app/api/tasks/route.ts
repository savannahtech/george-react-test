import prisma from "../../lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const json = await request.json();

    const newTask = await prisma.task.create({
      data: json
    });


    // Connect task to existing user!
    const id = json.userId;
    console.log('Task payload:', newTask);

    if (id && newTask.id) {
      await prisma.user.update({
        where: { id },
        data: {
          task: {
            connect: {
              id: newTask.id
            }
          }
        }
      });
    }

    return new NextResponse(JSON.stringify(newTask), {
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
