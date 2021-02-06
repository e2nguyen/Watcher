import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Headline: React.FC<Props> = ({
  children
}) => (
  <div className='headline'>
    {children}
    <style jsx>{`
      .headline {
        font-size: 1.5em;
      }
    `}  
    </style>
  </div>
);

export default Headline;