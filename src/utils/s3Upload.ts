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
      },
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }
 
    return uploadUrl;
  } catch (error) {
    console.error('Error uploading to Cloudflare/S3:', error);
    throw new Error('Failed to upload image');
  }
};
