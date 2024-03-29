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
    ${height}
    ${width}
  `

  return (
    <button
      className={buttonStyling}
      onClick={onClick}
    > 
      {children}
    </button>
  )
}

export default Button;
