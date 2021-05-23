import React from 'react';
import CustomImage from "components/CustomImage";
import "tailwindcss/tailwind.css";

interface Props {
  alt: string;
  children: React.ReactNode;
  className: string;
  src: string;
}

const Avatar = ({
    alt,
    children,
    className,
    src
  }: Props): JSX.Element => {
    const avatarStyling = 'rounded-full object-cover'
    const avatarWrapper = 'h-20 flex align-middle items-center'
    const userName = 'flex items-center h-50 m-0 pl-4 align-middle w-300'
    return (
      <div className={avatarWrapper}>
        <CustomImage 
          alt={alt}
          className={avatarStyling}
          height="50px"
          src={src}
          width="50px"
        />
        <p className={userName}>{children}</p>
      </div>
    );
}

export default Avatar;
  