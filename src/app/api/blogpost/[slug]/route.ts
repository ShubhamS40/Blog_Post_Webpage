import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client (global declaration is better for serverless environments)
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Extract 'id' from the request URL
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();  // Assuming id is part of the path `/api/blogpost/14`

    // Validate the id
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ message: 'Invalid or missing ID parameter' }, { status: 400 });
    }

    // Fetch the blog post by 'id'
    const blogPost = await prisma.blogpost.findUnique({
      where: { id: parseInt(id) },
    });

    // If found, return the blog post
    if (blogPost) {
      return NextResponse.json(blogPost, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
    }

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
