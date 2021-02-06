import React from "react";

interface Props {
  backgroundURL: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
}

const Button: React.FC<Props> = ({ 
  backgroundURL, 
  children, 
  height,
  onClick, 
  width
}) => (
  <div className="custom-button-container">
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
        border: none;
        height: ${height};
        width: ${width}
      }
    `}</style>
  </div>
);

export default Button;
