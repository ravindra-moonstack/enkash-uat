
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { uploadToS3 } from '@/src/utils/s3Upload';

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('Authorization');
    let token = authHeader ? authHeader.replace(/^Bearer\s+/i, '') : '';
    
    if (!token) {
      const cookieStore = await cookies();
      token = cookieStore.get('token')?.value || '';
    }

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
        const result = await uploadToS3(file.name, buffer, token);
        imageUrl = result.url;
        s3Response = result.s3Response;
    } catch (error: any) {
        console.error("S3 Upload Error:", error);
        let errorDetails: any = { message: error.message };
        let statusCode = 500;
        try {
            const parsed = JSON.parse(error.message);
            if (parsed && typeof parsed === 'object') {
                errorDetails = parsed;
                if (parsed.status) {
                    statusCode = parsed.status;
                }
            }
        } catch {
            // keep as string if not JSON
        }
        return NextResponse.json(
          { 
            error: 'Upload failed',
            status: errorDetails.status,
            statusText: errorDetails.statusText,
            headers: errorDetails.headers,
            data: errorDetails.data,
            details: errorDetails 
          },
          { status: statusCode }
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