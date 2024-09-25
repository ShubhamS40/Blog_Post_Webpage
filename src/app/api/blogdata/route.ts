// app/blogdata/route.ts
import { NextResponse } from 'next/server';
import formidable, { File } from 'formidable';
import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Enable the ability to handle form data
export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

export async function GET() {
    return NextResponse.json({ message: 'Hello Shubham' });
  }

// Handle POST requests
export async function POST(req: Request) {
  const form = new formidable.IncomingForm();

  return new Promise<NextResponse>((resolve, reject) => {
    form.parse(req as any, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing the files:', err);
        return reject(NextResponse.json({ error: 'Failed to parse files' }, { status: 400 }));
      }

      try {
        const imageFile = Array.isArray(files.image) ? files.image[0] : files.image; // Handle single or multiple files
        if (!imageFile) {
          return reject(NextResponse.json({ error: 'Image file is required' }, { status: 400 }));
        }

        // Define upload path
        const uploadsDir = path.join(process.cwd(), 'uploads');
        if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir); // Create uploads directory if it doesn't exist
        }

        // Move the uploaded file
        const imagePath = path.join(uploadsDir, imageFile.originalFilename || 'default.jpg');
        fs.renameSync(imageFile.filepath, imagePath);

        // Save image path in the database
        const newImage = await prisma..create({
          data: {
            image: imagePath, // Save the path to the database
          },
        });

        // Send response with the new image record
        resolve(NextResponse.json(newImage, { status: 201 }));
      } catch (error) {
        console.error('Error handling image upload:', error);
        reject(NextResponse.json({ error: 'Failed to upload image' }, { status: 500 }));
      }
    });
  });
}
