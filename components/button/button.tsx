import { jsx } from "@emotion/react";
import React from "react";

interface Props {
  backgroundSize: string;
  backgroundURL: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
}

const Button = ({
  backgroundSize,
  backgroundURL, 
  children, 
  height,
  onClick, 
  width
}: Props): JSX.Element => {
  return (
    <span className="custom-button-container">
      <button 
        className="custom-button" 
        onClick={onClick}
      > 
        {children}
      </button>
      <style jsx>{`
        .custom-button {
          background-color: transparent;
          background-image: url(${backgroundURL});
          background-size: ${backgroundSize};
          border: none;
          height: ${height};
          width: ${width};
        }
      `}</style>
    </span>
  )
}

export default Button;