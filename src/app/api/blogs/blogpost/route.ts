import { NextResponse } from 'next/server';

const blogs = [
  {
    title: "C Programming Tutorial",
    description: "Learn the basics of C programming with this comprehensive tutorial.",
    author: "By Jon Doe",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/Data-Science-2024-01-03T152151.126-1.png",
    slug: "c-programming-tutorial",
    content: `C programming is one of the foundational languages that every computer science student or enthusiast should learn. Developed by Dennis Ritchie in the early 1970s, C was created to serve as a general-purpose programming language that works with low-level system components. In this tutorial, we’ll cover everything from setting up a development environment, writing your first “Hello World” program, to diving deep into loops, functions, and pointers. C is still widely used in systems programming, embedded systems, and operating systems like Linux, due to its efficiency and close hardware interaction. This tutorial is structured to teach C from the ground up, with a focus on understanding how memory works, managing data structures, and handling files. Whether you're preparing for a systems-level job or building software that requires optimal performance, C is the right language to start with.`,
  },
  {
    title: "JavaScript Essentials",
    description: "Master the fundamentals of JavaScript with this essential guide.",
    author: "By Jane Smith",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/JavaScript-Essentials.png",
    slug: "javascript-essentials",
    content: `JavaScript is one of the most popular programming languages used today, and mastering it can open doors to web development, app development, and even server-side programming with Node.js. This essential guide will walk you through everything you need to know to become proficient in JavaScript, starting with understanding its syntax, variables, and functions. You'll also learn how to manipulate the Document Object Model (DOM) to create dynamic and interactive web pages. JavaScript is the cornerstone of front-end development and works hand-in-hand with HTML and CSS to create beautiful, responsive websites. The content of this guide focuses on JavaScript's most important features, such as asynchronous programming, promises, and closures. By the end of this tutorial, you'll be comfortable writing clean, efficient, and reusable JavaScript code for any application.`,
  },
  {
    title: "React for Beginners",
    description: "Get started with React and build dynamic web applications.",
    author: "By Alice Johnson",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/React-for-Beginners.png",
    slug: "react-for-beginners",
    content: `React is a powerful JavaScript library used for building user interfaces, particularly single-page applications where you need fast, dynamic user interaction. This tutorial is aimed at beginners who want to get started with React and create their first application. We will explore the core concepts of React, such as components, JSX, state, and props, to help you understand how React works under the hood. Additionally, you’ll learn how to manage the application state effectively with hooks like useState and useEffect. React’s virtual DOM makes it incredibly efficient and allows developers to build applications that scale, are maintainable, and perform well. By the end of this guide, you will be able to create reusable components and have a solid foundation to build complex applications. Whether you're looking to enhance your front-end skills or start a career in web development, mastering React is a great step forward.`,
  }
];

export const config = {
  api: {
    externalResolver: true,
  },
};

// Handler for GET request
export async function GET(request: Request) {
  return NextResponse.json(blogs);
}
