import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
const Image = ( image ) => (
  <div>
    <LazyLoadImage
        effect="blur"

      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width} />
      
    <span>{image.caption}</span>
  </div>
);
 
export default Image;