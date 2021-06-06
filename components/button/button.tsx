import { jsx } from "@emotion/react";
import React from "react";

interface Props {
  backgroundSize: string;
  backgroundImage: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
}

const Button = ({
  backgroundSize,
  backgroundImage,
  children, 
  height,
  onClick, 
  width
}: Props): JSX.Element => {
  const buttonStyling = `
    ${backgroundImage}
    ${backgroundSize}
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
