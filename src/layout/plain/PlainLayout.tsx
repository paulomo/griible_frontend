import React from 'react';

interface OwnProps {
  Component: React.FC;
}

const PlainLayout: React.FC<OwnProps> = (props) => {
  return (
    <div className="pt-0 h-screen">
      <main className="">{props.children}</main>
    </div>
  );
};

export default PlainLayout as React.ComponentType<OwnProps>;
