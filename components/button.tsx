import React, { Children } from "react";
// import "button.css";

interface IProps {
  children: React.ReactNode;
  value: string;
  onClick: () => void;
}

export const Button: React.FC<IProps> = ({ children, value, onClick }) => {
  return (
    <div className="firstbutton">
      <button 
        className="firstbutton-check" 
        onClick={onClick}
      > 
        {children}
      </button>
      <div>{value}</div>
    </div>
  );
};