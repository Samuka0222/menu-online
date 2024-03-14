-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "restaurantName" TEXT NOT NULL,
    "restaurantContact" TEXT NOT NULL,
    "restaurantImgUrl" TEXT NOT NULL,
    "deliveryValue" DECIMAL(65,30) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
