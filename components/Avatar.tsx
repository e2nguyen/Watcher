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

const Avatar = ({
    alt,
    children,
    className,
    imageClassName,
    src
  }: Props): JSX.Element => {
    const avatarWrapper = 'h-20 flex align-middle items-center'
    const userName = 'flex items-center h-50 m-0 pl-4 align-middle w-300'
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
          <p className={userName}>{children}</p>
      </div>
    );
}

export default Avatar;
  