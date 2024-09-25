-- CreateTable
CREATE TABLE "Blogpost" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Blogpost_pkey" PRIMARY KEY ("id")
);
