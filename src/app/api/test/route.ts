import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Fetch all blog posts from the database
    const blogPosts = await prisma.blogpost.findMany();

    // Return the blog posts as a JSON response
    return NextResponse.json({ blogPosts }, { status: 200 });
  } catch (error: any) {
    // Return error message if something goes wrong
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
