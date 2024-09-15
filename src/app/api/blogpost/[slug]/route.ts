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
