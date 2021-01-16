import React, { Children } from "react";

interface ButtonProperties {
  children: React.ReactNode;
  backgroundURL: string;
  height: string;
  width: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProperties> = ({ 
  children, 
  backgroundURL, 
  height,
  width,
  onClick 
}) => {
  return (
    <div className="container">
      <button 
        className="firstbutton-check" 
        onClick={onClick}
      > 
        {children}
      </button>
      <style jsx>{`
        .firstbutton-check {
          height: ${height};
          width: ${width};
          border: none;
          background-color: transparent;
          background-image: url(${backgroundURL});
        }
      `}</style>
    </div>
  );
};

export default Button;