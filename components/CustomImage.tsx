import React from 'react';
import Image from 'next/image';

/*
  The children presently exist for us to provide dynamic styled jsx

  TODO: Move off of styled-jsx and remove the children from this component
    - remove any instances of the component where children exist  
*/
interface Props {
  alt: string;
  children: React.ReactNode; 
  className: string;
  height: string;
  layout?: "fixed" | "intrinsic" | "responsive";
  src: string;
  width: string;
}
const CustomImage = ({
  alt,
  children,
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
    {children}
  </>
  );
}

CustomImage.defaultProps = {
  layout: "fixed"
};

export default CustomImage;
