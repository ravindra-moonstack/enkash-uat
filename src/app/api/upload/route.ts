// import { NextResponse } from 'next/server';
// import { uploadToS3 } from '@/src/utils/s3Upload';
// import { writeFile, mkdir } from 'fs/promises';
// import path from 'path';

// export async function POST(request: Request) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get('file') as File;

//     if (!file) {
//       return NextResponse.json(
//         { error: 'No file uploaded' },
//         { status: 400 }
//       );
//     }

//     const buffer = Buffer.from(await file.arrayBuffer());
//     let imageUrl = "";

//     // --- Local Upload (Active) ---
//     const filename = Date.now() + '_' + file.name.replaceAll(' ', '_');
//     const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
//     try {
//         await mkdir(uploadDir, { recursive: true });
//     } catch (e) {
//         // Ignore error if directory exists
//     }

//     await writeFile(path.join(uploadDir, filename), buffer);
//     imageUrl = `/uploads/${filename}`;
//     // ---------------------------

//     // --- S3 Upload (Commented Out) ---
//     try {
//         imageUrl = await uploadToS3(buffer, file.name, file.type);
//     } catch (error) {
//         console.error("S3 Upload Error:", error);
//         throw error;
//     }
//     // -------------------------------

//     return NextResponse.json({ url: imageUrl });
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from 'next/server';
import { uploadToS3 } from '@/src/utils/s3Upload';


export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    let imageUrl = "";

    // --- S3 Upload ---
    try {
        imageUrl = await uploadToS3(buffer, file.name, file.type);
    } catch (error) {
        console.error("S3 Upload Error:", error);
        throw error;
    }

    return NextResponse.json({ url: imageUrl });
  } catch (error: any) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error', details: error },
      { status: 500 }
    );
  }
}