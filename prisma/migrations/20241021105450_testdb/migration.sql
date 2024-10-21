/*
  Warnings:

  - You are about to drop the column `userId` on the `contactinfo` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "contactinfo" DROP CONSTRAINT "contactinfo_userId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_userId_fkey";

-- AlterTable
ALTER TABLE "contactinfo" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "userId";

-- DropTable
DROP TABLE "users";
