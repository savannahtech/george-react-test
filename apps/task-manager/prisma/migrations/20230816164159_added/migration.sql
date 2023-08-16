/*
  Warnings:

  - Added the required column `description` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("avatar", "createdAt", "id", "status", "title", "updatedAt", "userId") SELECT "avatar", "createdAt", "id", "status", "title", "updatedAt", "userId" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
