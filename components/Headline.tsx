import React from 'react';
interface Props {
  children: React.ReactNode;
}

const Headline = ({ children }: Props): JSX.Element => {
  return (
  <div className="text-base">
    {children}
  </div>
  );
}

export default Headline;