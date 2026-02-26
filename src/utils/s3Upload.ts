import { v4 as uuidv4 } from 'uuid'; 

export const uploadToS3 = async ( 
  fileName: string,
  fileBuffer: Buffer
): Promise<{ url: string; s3Response: any }> => {
  const fileExtension = fileName.split('.').pop()?.toLowerCase();
   
  const allowedExtensions = ['webp', 'svg'];
  
  if (!allowedExtensions.includes(fileExtension || '')) {
    throw new Error(`Only ${allowedExtensions.join(', ')} images are allowed. Please convert your image before uploading.`);
  }
  const uniqueFileName = `${uuidv4()}.${fileExtension}`;
  const uploadUrl = `https://glossary.enkash.com/${uniqueFileName}`;

  try { 
    const response = await fetch(uploadUrl, {
      method: "PUT",
      body: fileBuffer as any,
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

    const s3Response = {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      data: responseData 
    };

    if (!response.ok) {
        console.error(`S3 Upload FAILED: ${response.status} - ${responseText}`);
        // Throwing the serialized JSON here so the calling API route can catch it 
        // and send it back to the client for debugging
        throw new Error(JSON.stringify(s3Response));
    }
 
    return { url: uploadUrl, s3Response };
  } catch (error: any) {
    console.error('Error uploading to Cloudflare/S3:', error);
    // Propagate the detailed error
    throw error;
  }
};
