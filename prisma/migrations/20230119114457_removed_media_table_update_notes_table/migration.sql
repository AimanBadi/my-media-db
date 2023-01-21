/*
  Warnings:

  - You are about to drop the `Media` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_mediaId_fkey";

-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "mediaId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Media";
