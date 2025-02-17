import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';

interface ImageInfo {
  id: string;
  src: string;
  thumbnailSrc: string;
  width: number;
  height: number;
}

const IMAGES_DIR = process.env.IMAGES_DIR || path.join(process.cwd(), 'public/images');
const THUMBNAILS_DIR = path.join(process.cwd(), 'public/thumbnails');

// 确保目录存在
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}
if (!fs.existsSync(THUMBNAILS_DIR)) {
  fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
}

async function generateThumbnail(imagePath: string, thumbnailPath: string): Promise<void> {
  await sharp(imagePath)
    .resize(400, null, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .toFile(thumbnailPath);
}

async function getImageDimensions(imagePath: string) {
  const metadata = await sharp(imagePath).metadata();
  return {
    width: metadata.width || 0,
    height: metadata.height || 0
  };
}

async function processImage(imagePath: string): Promise<ImageInfo | null> {
  try {
    const fileName = path.basename(imagePath);
    const id = uuidv4();
    const thumbnailFileName = `${id}-${fileName}`;
    const thumbnailPath = path.join(THUMBNAILS_DIR, thumbnailFileName);

    // 检查缩略图是否已存在
    const existingThumbnails = fs.readdirSync(THUMBNAILS_DIR);
    const existingThumbnail = existingThumbnails.find(thumb => thumb.endsWith(fileName));

    if (existingThumbnail) {
      // 如果缩略图已存在，直接使用现有的缩略图
      const dimensions = await getImageDimensions(imagePath);
      const existingId = existingThumbnail.split('-')[0];
      return {
        id: existingId,
        src: `/images/${fileName}`,
        thumbnailSrc: `/thumbnails/${existingThumbnail}`,
        width: dimensions.width,
        height: dimensions.height
      };
    }

    // 如果缩略图不存在，则生成新的缩略图
    await generateThumbnail(imagePath, thumbnailPath);
    const dimensions = await getImageDimensions(imagePath);

    return {
      id,
      src: `/images/${fileName}`,
      thumbnailSrc: `/thumbnails/${thumbnailFileName}`,
      width: dimensions.width,
      height: dimensions.height
    };
  } catch (error) {
    console.error(`Error processing image ${imagePath}:`, error);
    return null;
  }
}

export async function GET() {
  try {
    const files = fs.readdirSync(IMAGES_DIR);
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    const imagesPromises = imageFiles.map(file =>
      processImage(path.join(IMAGES_DIR, file))
    );

    const images = (await Promise.all(imagesPromises)).filter((img): img is ImageInfo => img !== null);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error processing images:', error);
    return NextResponse.json({ error: 'Failed to process images' }, { status: 500 });
  }
}