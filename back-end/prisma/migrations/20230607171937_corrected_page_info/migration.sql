/*
  Warnings:

  - You are about to alter the column `color` on the `Page` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "Page" ALTER COLUMN "color" SET DATA TYPE VARCHAR(10);
