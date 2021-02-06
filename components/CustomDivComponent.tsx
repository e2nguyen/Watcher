import React from 'react';

interface Props {
  className: string;
  children: React.ReactNode;
  color: string;
  header: string;
  height: string;
  width: string;
}

const CustomDivComponent: React.FC<Props> = ({ 
  className, 
  children, 
  color,
  header,
  height,
  width
}) => {
  return (
    <>
    <div className = {className}>
        <h1>{header}</h1>
      <div className = "body">{children}</div>
    </div>
    <style jsx>{`
        .${className}{
          background-color: ${color};
          height: ${height};
          width: ${width}
        }
      `}</style>
    </>
  )
};

export default CustomDivComponent;