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
        .container {
          margin: 50px;
        }
        .firstbutton-check {
          // background-color: pink;
          font-size: 30px;
          // font-weight: 400;
          line-height: 2;
          color: #333;
          font-family: "Lucida Console", "Courier New", monospace;
          background-image: url(${backgroundURL});
        }
      `}</style>
    </div>
  );
};

export default Button;