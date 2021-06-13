import React from 'react';

interface Props {
  children: React.ReactNode;
  color: string;
  header: string;
  height: string;
  width: string;
}

const CustomDiv = ({
  children, 
  color,
  header,
  height,
  width
}: Props): JSX.Element => {
  const customDivStyling = `
    ${color}
    h-${height}
    w-${width}
  `
  return (
    <>
      <div className={customDivStyling}>
        <h1>{header}</h1>
        <div>{children}</div>
      </div>
    </>
  )
};

export default CustomDiv;