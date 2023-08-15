// import type { NextApiRequest, NextApiResponse } from 'next'
// import { prisma } from "../lib/prismadb";

import { Assignee } from "@tasks-management/shared-types";

export const peopleList: Assignee[] = [
  {
    id: 1,
    name: 'Unassigned'
  },
  {
    id: 2,
    name: 'Rick'
  },
  {
    id: 3,
    name: 'Jerry'
  },
  {
    id: 4,
    name: 'Beth'
  },
  {
    id: 5,
    name: 'Summer'
  }
];

// POST /api/tasks/pe
// Required fields in body: name, email
// export default async function handle(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const users = await prisma.user.findMany();
//   return res.status(201).json({
//     users: users
//   })
// }



