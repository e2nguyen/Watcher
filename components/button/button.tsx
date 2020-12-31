import CSS from "csstype";
import React, { Children } from "react";
import divStyle from "components/button/button.styles";
import { css } from "@emotion/react";

interface ButtonProperties {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProperties> = ({ children, onClick }) => {
  return (
    <div css={ divStyle }>
      <button 
        className="firstbutton-check" 
        onClick={onClick}
      > 
        {children}
      </button>
    </div>
  );
};

export default Button;