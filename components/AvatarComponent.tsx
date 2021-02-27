import React from 'react';
import CustomImageComponent from "components/CustomImageComponent";

interface Props {
  alt: string;
  children: React.ReactNode;
  className: string;
  imageClassName: string;
  src: string;
}

const AvatarStyling: React.FC<{className: string}> = ({className}) => (
  <style jsx global>{`
    .${className} {
      border-radius: 50%;
      object-fit: cover;
    }
  `}</style>
)

const AvatarComponent: React.FC<Props> = ({
  alt,
  children,
  className,
  imageClassName,
  src,
}) => (
  <div className={`${className}`}>
    <CustomImageComponent 
      alt={alt}
      className={imageClassName}
      height="50px"
      src={src}
      width="50px"
    >
      <AvatarStyling className={imageClassName}/>
    </CustomImageComponent>
    {children}
    <style jsx global>{`
      .${className} {
        height: 60px;
        vertical-align: middle;
        display: flex;
        align-items: center;
      }
      p {
        display: flex;
        align-items: center;
        height: 50px;
        margin: 0;
        padding-left: 20px;
        vertical-align: middle;
        width: 300px;
      }
    `}</style>
  </div>
);

export default AvatarComponent;
  