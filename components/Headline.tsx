import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Headline = ({ children }: Props): JSX.Element => {
  return (
  <div className="headline">
    {children}
    <style jsx>{`
      .headline {
        font-size: 1.5em;
      }
    `}  
    </style>
  </div>
  );
}

export default Headline;