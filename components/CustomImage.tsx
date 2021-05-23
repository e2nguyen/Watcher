import React from 'react';
import Image from 'next/image';

interface Props {
  alt: string;
  className: string;
  height: string;
  layout?: "fixed" | "intrinsic" | "responsive";
  src: string;
  width: string;
}

const CustomImage = ({
  alt,
  className,
  height,
  layout,
  src,
  width
  }: Props): JSX.Element => {
  return (
  <>
    <Image
      alt={alt}
      className={className}
      height={height}
      layout={layout}
      src={src}
      width={width}
    />
  </>
  );
}

CustomImage.defaultProps = {
  layout: "fixed"
};

export default CustomImage;
