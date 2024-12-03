import React, { useState, useEffect } from 'react';

interface ProgressiveImageProps {
  src: string;
  placeholderSrc?: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  placeholderSrc,
  alt,
  className = '',
  width,
  height,
  onClick,
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`transition-all duration-500 ${
        isLoading ? 'blur-sm scale-[1.02]' : 'blur-0 scale-100'
      } ${className}`}
      width={width}
      height={height}
      loading="lazy"
      onClick={onClick}
    />
  );
};

export default ProgressiveImage;