/*
  Warnings:

  - You are about to drop the column `subTitle` on the `projects` table. All the data in the column will be lost.
  - Added the required column `link` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "subTitle",
ADD COLUMN     "link" TEXT NOT NULL;
