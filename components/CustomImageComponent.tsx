import React from 'react';
import Image from 'next/image';

interface Props {
  alt: string;
  children: React.ReactNode;
  className: string;
  height: string;
  layout?: "fixed" | "intrinsic" | "responsive";
  src: string;
  width: string;
}

const CustomImageComponent: React.FC<Props> = ({
  alt,
  children,
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
    {children}
  </>
);

CustomImageComponent.defaultProps = {
  layout: "fixed"
};

export default CustomImageComponent;
