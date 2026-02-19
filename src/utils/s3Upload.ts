import { v4 as uuidv4 } from 'uuid'; 

export const uploadToS3 = async ( 
  fileName: string,
  fileBuffer: Buffer
): Promise<string> => {
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

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`S3 Upload FAILED: ${response.status} - ${errorText}`);
      throw new Error(`Upload failed with status: ${response.status}. Details: ${errorText}`);
    }
 
    return uploadUrl;
  } catch (error: any) {
    console.error('Error uploading to Cloudflare/S3:', error);
    // Propagate the detailed error
    throw error;
  }
};
