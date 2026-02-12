
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

    let imageUrl = "";
    const buffer = Buffer.from(await file.arrayBuffer());
    try {
        imageUrl = await uploadToS3(file.name, buffer);
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