import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
require('dotenv').config();

export default function Home() {
  const [imageInfo, setImageInfo] = useState();
  const loadImages = async () => {
    try {
      const res = await fetch('/api/images');
      const { payload } = await res.json();
      setImageInfo(payload);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div className="up-gallery">
      <h1 className="title">Media Gallery</h1>
      <div className="gallery">
        {imageInfo &&
          imageInfo.map((image, index) => (
            <Image
              key={index}
              onClick={() => window.open(image.path)}
              cloudName={process.env.REACT_APP_CLOUD_NAME}
              publicId={image.public_id}
              crop="scale"
              width="300"
            />
          ))}
      </div>
    </div>
  );
}
