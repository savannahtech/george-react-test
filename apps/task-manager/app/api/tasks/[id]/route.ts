import prisma from "../../../lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  if (!task) {
    return new NextResponse("No task with ID found", { status: 404 });
  }

  return NextResponse.json(task);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const json = await request.json();

  const updated_task = await prisma.user.update({
    where: { id },
    data: json,
  });

  if (!updated_task) {
    return new NextResponse("No user with ID found", { status: 404 });
  }

  return NextResponse.json(updated_task);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const deleted_task = await prisma.task.delete({
      where: { id },
    });

    // return new NextResponse(null, { status: 204 });
    return NextResponse.json(deleted_task);
  } catch (error: any) {
    if (error.code === "P2025") {
      return new NextResponse("No task with ID found", { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}
