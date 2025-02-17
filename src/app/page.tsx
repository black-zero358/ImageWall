'use client';

import { useEffect, useState } from 'react';
import ImageGallery from './components/ImageGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-regular-svg-icons';

interface ImageData {
  id: string;
  src: string;
  thumbnailSrc: string;
  width: number;
  height: number;
}

export default function Home() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();

    // 设置轮询间隔，每30秒检查一次新图片
    const interval = setInterval(fetchImages, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faImages} />
        Gallery
      </h1>
      <ImageGallery images={images} />
    </main>
  );
}
