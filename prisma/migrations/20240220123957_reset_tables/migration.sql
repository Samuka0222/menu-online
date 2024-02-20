/*
  Warnings:

  - You are about to drop the column `orderId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `orderItemsId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_orderId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderItemsId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "orderId";

-- CreateTable
CREATE TABLE "OrderItems" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderItemsId_fkey" FOREIGN KEY ("orderItemsId") REFERENCES "OrderItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
