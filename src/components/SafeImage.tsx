import { useState, ImgHTMLAttributes } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
  iconSize?: number;
}

export const SafeImage = ({
  src,
  alt,
  className,
  fallbackClassName = "bg-slate-100 flex items-center justify-center text-slate-300",
  iconSize = 24,
  ...props
}: SafeImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`w-full h-full ${fallbackClassName}`}>
        <ImageOff size={iconSize} strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
};
