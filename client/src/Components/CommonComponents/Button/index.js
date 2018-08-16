import React from 'react';

export default props => {
  const { children, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};
