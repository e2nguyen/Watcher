import { jsx } from "@emotion/react";
import React from "react";

interface Props {
  backgroundImage: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
}

const Button = ({
  backgroundImage,
  children, 
  height,
  onClick, 
  width
}: Props): JSX.Element => {
  const buttonStyling = `
    ${backgroundImage}
    bg-contain
    border-none	
    h-${height}
    w-${width}
  `

  return (
    <span className="custom-button-container">
      <button
        className={buttonStyling}
        onClick={onClick}
      > 
        {children}
      </button>
    </span>
  )
}

export default Button;
