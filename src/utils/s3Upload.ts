
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
 


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID?.trim(),
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY?.trim(),
  region: process.env.AWS_REGION?.trim(),
  signatureVersion: 'v4', 
  // s3ForcePathStyle: true,
});

export const uploadToS3 = async (
  file: Buffer,
  fileName: string,
  contentType: string
): Promise<string> => {
  const fileExtension = fileName.split('.').pop()?.toLowerCase();
   
  if (!['webp', 'svg'].includes(fileExtension || '')) {
    throw new Error('Only SVG or WebP images are allowed. Please convert your image before uploading.');
  }
  const uniqueFileName = `${uuidv4()}.${fileExtension}`;

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME || '',
    Key: `${uniqueFileName}`, 
    Body: file,
    ContentType: contentType,
    // ACL: 'public-read', // Bucket does not allow ACLs
  };

  console.log("Attempting S3 Upload with params:", {
    Bucket: params.Bucket,
    Key: params.Key,
    Region: s3.config.region,
    ContentType: params.ContentType
  });

  try {
    const uploadResult = await s3.upload(params).promise();
    return uploadResult.Location;
  } catch (error) {
    console.error('Error uploading to S3:', error);
    throw new Error('Failed to upload image to S3');
  }
};
