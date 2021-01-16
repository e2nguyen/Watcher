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

const CustomImageComponent: React.FC<Props> = ({
  alt,
  className,
  height,
  layout,
  src,
  width
}) => (
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

CustomImageComponent.defaultProps = {
  layout: "fixed"
};


export default CustomImageComponent;
