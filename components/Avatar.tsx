import React from 'react';
import CustomImage from "components/CustomImage";
import "tailwindcss/tailwind.css";

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
//` <div className={`${className}`}>

const Avatar = ({
    alt,
    children,
    className,
    imageClassName,
    src
  }: Props): JSX.Element => {
    const avatarWrapper = 'h-60 flex align-middle items-center'
    return (
      <div className={avatarWrapper}>
        <CustomImage 
          alt={alt}
          className={imageClassName}
          height="50px"
          src={src}
          width="50px"
        >
          <AvatarStyling className={imageClassName}/>
        </CustomImage>
        {children}
        <style jsx global>{`
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
}

export default Avatar;
  