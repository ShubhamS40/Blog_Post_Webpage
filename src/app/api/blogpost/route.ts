import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/lib/supabaseClient';
// import { createClient } from '@supabase/supabase-js';


// Initialize Prisma Client
const prisma = new PrismaClient();



export async function POST(req: NextRequest) {
  try {
    // Parse the incoming form data
    const formData = await req.formData();

    // Extract fields from the form data
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const author = formData.get('author') as string;
    const imageFile = formData.get('image') as File; // Assumes image is sent as a file in form data

    // Validate required fields
    if (!title || !description || !author || !imageFile) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate a unique file name using UUID
    const fileName = `${uuidv4()}-${imageFile.name}`;

    // Upload the image to Supabase storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('BlogImage') // Replace with your Supabase bucket name
      .upload(`public/${fileName}`, imageFile);

    // Handle any errors that occur during upload
    if (uploadError) {
      return NextResponse.json(
        { message: `Upload failed: ${uploadError.message}` },
        { status: 500 }
      );
    }

    // Construct the public URL for the uploaded image
    const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/BlogImage/public/${fileName}`;

    // Save the blog post data to the database with the image URL
    const blogPost = await prisma.blogpost.create({
      data: {
        image: imageUrl,
        title,
        description,
        author,
      },
    });

    // Return the newly created blog post as a JSON response
    return NextResponse.json({ blogPost }, { status: 201 });
  } catch (error: any) {
    // Return error message if something goes wrong
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
