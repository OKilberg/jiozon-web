import Image from 'next/image';
import { ReactNode } from 'react';

import React from 'react'

type Props = {
  imageUrl: string,
  children?: ReactNode,
  className?: string
}

const BackgroundImage = ( {imageUrl, children, className}: Props ) => {
  return (
    <section className={"relative w-full h-[400px] "+className}>
      {/* Section background image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Your content inside the container */}
      <div className="relative z-10 text-white">
        {children}
      </div>
    </section>
  );
};

export default BackgroundImage;