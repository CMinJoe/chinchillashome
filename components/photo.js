import React from 'react';
import Image from 'next/image';

import { buildSrcSet, buildSrc } from '@/lib/helpers';

const Photo = ({
  photo,
  width,
  height,
  srcSizes = [400, 600, 800, 1000, 1200],
  sizes = '(min-width: 940px) 50vw, 100vw',
  layout = 'intrinsic',
  quality = 80,
  objectFit = 'contain',
  className,
}) => {
  // define our aspect ratio if not a background fill
  const imageWidth = layout === 'fill' ? null : width || photo.width;
  const imageHeight = layout === 'fill' ? null : height || photo.height;
  const imageSizes =
    layout === 'fill' || layout === 'responsive' ? sizes : null;

  const aspect =
    typeof width === 'number' && typeof height === 'number'
      ? (height / width) * 100
      : 100 / (photo.customRatio || photo.aspectRatio);

  // define our src and srcset
  const src = buildSrc(photo, {
    ...{ width },
    ...{ height },
    ...{ quality },
  });

  const srcset = buildSrcSet(photo, {
    ...{ srcSizes },
    ...{ aspect },
    ...{ quality },
  });

  if (!photo?.asset) return null;
  return (
    <>
      <figure className={className ? className : null}>
        <Image
          width={imageWidth}
          height={imageHeight}
          src={src}
          srcSet={srcset}
          quality={quality}
          sizes={imageSizes}
          layout={layout}
          alt={photo.alt || photo.asset?.altText}
          objectFit={objectFit}
        />
      </figure>
      <style jsx>{`
        figure {
          position: relative;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Photo;
