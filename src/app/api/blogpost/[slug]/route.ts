import { NextResponse } from 'next/server';

const blogs = [
  {
    title: "C Programming Tutorial",
    description: "Learn the basics of C programming with this comprehensive tutorial.",
    author: "By Jon Doe",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/Data-Science-2024-01-03T152151.126-1.png",
    slug: "c-programming-tutorial",
    content: `C programming is one of the foundational languages that every computer science student or enthusiast should learn. Developed by Dennis Ritchie in the early 1970s, C was created to serve as a general-purpose programming language that works with low-level system components...`,
  },
  {
    title: "JavaScript Essentials",
    description: "Master the fundamentals of JavaScript with this essential guide.",
    author: "By Jane Smith",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/JavaScript-Essentials.png",
    slug: "javascript-essentials",
    content: `JavaScript is one of the most popular programming languages used today, and mastering it can open doors to web development, app development, and even server-side programming with Node.js...`,
  },
  {
    title: "React for Beginners",
    description: "Get started with React and build dynamic web applications.",
    author: "By Alice Johnson",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/React-for-Beginners.png",
    slug: "react-for-beginners",
    content: `React is a powerful JavaScript library used for building user interfaces, particularly single-page applications where you need fast, dynamic user interaction...`,
  },
];

export const config = {
  api: {
    externalResolver: true,
  },
};

// Handler for GET request to return a specific blog post by slug
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  const blog = blogs.find((b) => b.slug === slug);

  if (blog) {
    return NextResponse.json(blog);
  } else {
    return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
  }
}


import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Extract 'id' from the request URL
    const url = new URL(req.url);
    const id = url.searchParams.get('id');  // Get the 'id' from query params

    if (!id) {
      return NextResponse.json({ message: 'ID parameter is required' }, { status: 400 });
    }

    // Fetch a specific blog post by its 'id'
    const blogPost = await prisma.blogpost.findUnique({
      where: {
        id: parseInt(id),  // Parse the 'id' as an integer
      },
    });

    // If blog post is found, return it as a JSON response
    if (blogPost) {
      return NextResponse.json(blogPost, { status: 200 });
    } else {
      // If no blog post found with the provided id
      return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
    }
  } catch (error: any) {
    // Handle any errors
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
