import React, { Children } from "react";

interface ButtonProperties {
  children: React.ReactNode;
  backgroundURL: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProperties> = ({ 
  children, 
  backgroundURL, 
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
          height: 200px;
          width: 200px;
          border: none;
          background-color: transparent;
          background-image: url(${backgroundURL});
        }
      `}</style>
    </div>
  );
};

export default Button;