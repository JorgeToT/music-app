/*
  Warnings:

  - You are about to drop the column `UaerId` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the `Uaer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_UaerId_fkey";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "UaerId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- DropTable
DROP TABLE "Uaer";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
