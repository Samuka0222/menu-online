/*
  Warnings:

  - Added the required column `favorite` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "favorite" BOOLEAN NOT NULL;
