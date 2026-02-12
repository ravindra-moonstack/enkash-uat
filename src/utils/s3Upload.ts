
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

// Configure AWS SDK
// Note: In Next.js, use process.env for server-side secrets
if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_REGION || !process.env.AWS_S3_BUCKET_NAME) {
  console.error("Missing AWS Environment Variables:");
  console.error("AWS_ACCESS_KEY_ID:", process.env.AWS_ACCESS_KEY_ID ? "Set" : "Missing");
  console.error("AWS_SECRET_ACCESS_KEY:", process.env.AWS_SECRET_ACCESS_KEY ? "Set" : "Missing");
  console.error("AWS_REGION:", process.env.AWS_REGION ? "Set" : "Missing");
  console.error("AWS_S3_BUCKET_NAME:", process.env.AWS_S3_BUCKET_NAME ? "Set" : "Missing");
}

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID?.trim(),
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY?.trim(),
  region: process.env.AWS_REGION?.trim(),
  signatureVersion: 'v4', // Required for some regions like ap-south-1
  s3ForcePathStyle: true,
});

export const uploadToS3 = async (
  file: Buffer,
  fileName: string,
  contentType: string
): Promise<string> => {
  const fileExtension = fileName.split('.').pop()?.toLowerCase();
  
  // Strict validation as per user request: Only SVG or WebP
  if (!['webp', 'svg'].includes(fileExtension || '')) {
    throw new Error('Only SVG or WebP images are allowed. Please convert your image before uploading.');
  }

  // Generate a unique filename
  const uniqueFileName = `${uuidv4()}.${fileExtension}`;

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME || '',
    Key: `${uniqueFileName}`, 
    Body: file,
    ContentType: contentType,
    // ACL: 'public-read', // Uncomment if you want the object to be public by object ACL
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
