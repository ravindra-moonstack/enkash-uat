import { v4 as uuidv4 } from 'uuid'; 

export const uploadToS3 = async ( 
  fileName: string,
  fileBuffer: Buffer
): Promise<string> => {
  const fileExtension = fileName.split('.').pop()?.toLowerCase();
   
  if (!['webp', 'svg'].includes(fileExtension || '')) {
    throw new Error('Only SVG or WebP images are allowed. Please convert your image before uploading.');
  }
  const uniqueFileName = `${uuidv4()}.${fileExtension}`;
  const uploadUrl = `https://glossary.enkash.com/${uniqueFileName}`;

  try { 
    const response = await fetch(uploadUrl, {
      method: "PUT",
      body: fileBuffer as any,
      headers: {
        "Content-Type": fileExtension === "svg" ? "image/svg+xml" : "image/webp",
      },
      // Note: If you have an API key or auth header for your Cloudflare worker, add it here.
      // e.g. "X-Custom-Auth": process.env.CLOUDFLARE_AUTH_KEY
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    // Return CDN URL
    return uploadUrl;
  } catch (error) {
    console.error('Error uploading to Cloudflare/S3:', error);
    throw new Error('Failed to upload image');
  }
};
