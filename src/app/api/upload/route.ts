
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
    let s3Response = null;
    const buffer = Buffer.from(await file.arrayBuffer());
    try {
        const result = await uploadToS3(file.name, buffer);
        imageUrl = result.url;
        s3Response = result.s3Response;
    } catch (error: any) {
        console.error("S3 Upload Error:", error);
        let errorDetails = error.message;
        try {
            errorDetails = JSON.parse(error.message);
        } catch {
            // keep as string if not JSON
        }
        return NextResponse.json(
          { error: 'Upload failed', details: errorDetails },
          { status: 500 }
        );
    }

    return NextResponse.json({ url: imageUrl, s3Response });
  } catch (error: any) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error', details: error },
      { status: 500 }
    );
  }
}