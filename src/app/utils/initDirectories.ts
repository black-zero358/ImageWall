import fs from 'fs';
import path from 'path';

export const IMAGES_DIR = process.env.IMAGES_DIR || path.join(process.cwd(), 'public/images');
export const THUMBNAILS_DIR = path.join(process.cwd(), 'public/thumbnails');

export function initDirectories() {
  // 确保图片目录存在
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
    console.log(`Created images directory at: ${IMAGES_DIR}`);
  }

  // 确保缩略图目录存在
  if (!fs.existsSync(THUMBNAILS_DIR)) {
    fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
    console.log(`Created thumbnails directory at: ${THUMBNAILS_DIR}`);
  }
}