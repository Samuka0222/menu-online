/*
  Warnings:

  - Added the required column `orderId` to the `OrderItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_orderItemsId_fkey";

-- AlterTable
ALTER TABLE "OrderItems" ADD COLUMN     "orderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
