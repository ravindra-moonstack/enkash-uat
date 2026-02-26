
import { NextResponse } from 'next/server';
// import { uploadToS3 } from '@/src/utils/s3Upload';
import { v4 as uuidv4 } from 'uuid'; 

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

    // let imageUrl = "";
    const buffer = Buffer.from(await file.arrayBuffer());
 const fileExtension = file.name.split('.').pop()?.toLowerCase();
  const uniqueFileName = `${uuidv4()}`;
  const uploadUrl = `https://glossary.enkash.com/${uniqueFileName}`;
    try {
        // imageUrl = await uploadToS3(file.name, buffer);
        const response = await fetch(uploadUrl, {
      method: "PUT",
      body: buffer as any,
      headers: {
        "Content-Type": fileExtension === 'svg' ? 'image/svg+xml' : 'image/webp',
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    
    const responseText = await response.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch{
      responseData = responseText;
    } 

    return NextResponse.json({ 
      error: !response.ok ? "Upload failed" : undefined,
      url: response.ok ? uploadUrl : "",
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      data: responseData 
    }, { status: response.status });
    } catch (error: any) {
        console.error("S3 Upload Error:", error);
        
        const errorDetails = error instanceof Error 
            ? Object.getOwnPropertyNames(error).reduce((acc: any, key) => {
                acc[key] = (error as any)[key];
                return acc;
            }, {})
            : error;
            
        return NextResponse.json({ 
            error: "Fetch request failed", 
            message: error?.message || String(error),
            details: errorDetails
        }, { status: 500 });
    }
  } catch (error: any) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error', details: error },
      { status: 500 }
    );
  }
}
