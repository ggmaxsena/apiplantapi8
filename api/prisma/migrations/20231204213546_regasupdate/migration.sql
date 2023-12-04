/*
  Warnings:

  - You are about to drop the column `REGRAS` on the `Planta` table. All the data in the column will be lost.
  - Added the required column `REGAS` to the `Planta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planta" DROP COLUMN "REGRAS",
ADD COLUMN     "REGAS" TEXT NOT NULL;
