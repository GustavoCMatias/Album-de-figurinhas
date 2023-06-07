/*
  Warnings:

  - Added the required column `image` to the `Figurinha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Figurinha" ADD COLUMN     "image" TEXT NOT NULL;
