-- CreateTable
CREATE TABLE "warehouse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,

    CONSTRAINT "warehouse_pkey" PRIMARY KEY ("id")
);
